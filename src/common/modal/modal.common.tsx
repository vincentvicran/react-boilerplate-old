import * as React from 'react'
import {
  makeAnimatedComponent,
  useMountedValue,
  interpolate,
  UseAnimatedValueConfig,
  AnimationConfigUtils
} from 'react-ui-animate'

import {useDisableScroll} from 'src/hooks'

import {ModalContainer, ModalContent} from './modal.styled'

const AnimatedModalContainer = makeAnimatedComponent(ModalContainer)
const AnimatedModalContent = makeAnimatedComponent(ModalContent)

interface ModalProps {
  children: React.ReactNode
  visible: boolean
  onOutsideClick?: () => void
  style?: Omit<React.CSSProperties, 'transform'>
  isAnimated?: boolean
  animationConfig?: UseAnimatedValueConfig
  disableScroll?: boolean
}

export const Modal = ({
  children,
  visible,
  onOutsideClick,
  style,
  isAnimated = true,
  animationConfig = AnimationConfigUtils.POWER4,
  disableScroll = true
}: ModalProps) => {
  const modalRef = React.useRef<HTMLElement>(null)
  const transition = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
    config: isAnimated ? animationConfig : {immediate: true}
  })

  useDisableScroll(disableScroll && visible)

  return (
    <>
      {transition(
        (animated, mounted) =>
          mounted && (
            <AnimatedModalContainer
              onClick={(e: any) => {
                e.stopPropagation()
                onOutsideClick?.()
              }}
              style={{
                opacity: animated.value
              }}
            >
              <AnimatedModalContent
                ref={modalRef}
                onClick={(e: any) => e.stopPropagation()}
                style={{
                  ...style,
                  scale: interpolate(animated.value, [0, 1], [0.95, 1])
                }}
              >
                {children}
              </AnimatedModalContent>
            </AnimatedModalContainer>
          )
      )}
    </>
  )
}
