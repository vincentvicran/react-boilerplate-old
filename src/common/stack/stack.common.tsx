import {Children, CSSProperties} from 'react'

import {HStackContainer} from './stack.style'

interface HStackProps {
  children?: any
  gap?: number
  style?: CSSProperties
}

export const HStack = ({children, gap = 8, style}: HStackProps) => {
  const gapStyles = {
    width: gap
  }

  return (
    <HStackContainer style={style}>
      {Children.map(children, (child: React.ReactElement<any>, index) => (
        <>
          {child}
          {index !== Children.count(children) - 1 && <div style={gapStyles} />}
        </>
      ))}
    </HStackContainer>
  )
}
