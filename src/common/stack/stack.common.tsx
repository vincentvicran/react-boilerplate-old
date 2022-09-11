import {Children, CSSProperties} from 'react'
import Theme from 'src/theme'

import {HStackContainer, VStackContainer} from './stack.style'

interface StackProps {
  children?: any
  gap?: keyof typeof Theme.space
  style?: CSSProperties
  justify?: CSSProperties['justifyContent']
  align?: CSSProperties['alignItems']
}

export const HStack = ({
  children,
  gap = '$0',
  style,
  justify = 'flex-start',
  align = 'stretch'
}: StackProps) => {
  return (
    <HStackContainer
      style={{...style, justifyContent: justify, alignItems: align}}
    >
      {Children.map(children, (child: React.ReactElement<any>, index) => (
        <>
          {child}
          {index !== Children.count(children) - 1 && (
            <div style={{width: Theme.space[gap]}} />
          )}
        </>
      ))}
    </HStackContainer>
  )
}

export const VStack = ({
  children,
  gap = '$0',
  style,
  justify = 'flex-start',
  align = 'stretch'
}: StackProps) => {
  return (
    <VStackContainer
      style={{...style, justifyContent: justify, alignItems: align}}
    >
      {Children.map(children, (child: React.ReactElement<any>, index) => (
        <>
          {child}
          {index !== Children.count(children) - 1 && (
            <div style={{height: Theme.space[gap]}} />
          )}
        </>
      ))}
    </VStackContainer>
  )
}
