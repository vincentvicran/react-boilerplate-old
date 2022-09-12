import {PropsWithChildren, useCallback, useState} from 'react'
import {
  AnimationConfigUtils,
  interpolate,
  makeAnimatedComponent,
  useMountedValue
} from 'react-ui-animate'

import {
  TooltipContainer,
  TooltipContent,
  TooltipContentText
} from './tooltip.style'

type Placement =
  | 'bottomleft'
  | 'bottomright'
  | 'bottommiddle'
  | 'topleft'
  | 'topright'
  | 'topmiddle'

const getPlacement = (placement: Placement): React.CSSProperties => {
  switch (placement) {
    case 'bottomleft':
      return {left: 0, top: '100%', transformOrigin: '0% 0%'}
    case 'bottommiddle':
      return {left: '50%', top: '100%', transformOrigin: '0% 0%'}
    case 'bottomright':
      return {right: 0, top: '100%', transformOrigin: '100% 0%'}
    case 'topleft':
      return {left: 0, bottom: '100%', transformOrigin: '0% 100%'}
    case 'topmiddle':
      return {left: '50%', bottom: '100%', transformOrigin: '0% 100%'}
    case 'topright':
      return {right: 0, bottom: '100%', transformOrigin: '100% 100%'}
  }
}

interface TooltipProps extends PropsWithChildren {
  title: string
  placement?: Placement
}

const AnimatedTooltipContent = makeAnimatedComponent(TooltipContent)
const AnimatedTooltipContentText = makeAnimatedComponent(TooltipContentText)
export const Tooltip = ({
  title,
  placement = 'bottomleft',
  children
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const mv = useMountedValue(visible, {
    from: 0,
    enter: 1,
    exit: 0,
    ...AnimationConfigUtils.POWER4
  })

  const triggerAnimation = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>, value: boolean) => {
      e.stopPropagation()
      setVisible(value)
    },
    []
  )

  return (
    <TooltipContainer
      onMouseEnter={(e) => triggerAnimation(e, true)}
      onMouseLeave={(e) => triggerAnimation(e, false)}
    >
      {children}

      {mv(
        (a, m) =>
          m && (
            <AnimatedTooltipContent
              style={{
                opacity: a.value,
                scale: interpolate(a.value, [0, 1], [0.9, 1]),
                ...getPlacement(placement)
              }}
            >
              <AnimatedTooltipContentText>{title}</AnimatedTooltipContentText>
            </AnimatedTooltipContent>
          )
      )}
    </TooltipContainer>
  )
}