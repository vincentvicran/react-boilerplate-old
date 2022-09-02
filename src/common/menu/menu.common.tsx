import {
  StyledMenuContainer,
  MenuItemProps,
  StyledMenuItem,
  StyledMenuSeparator
} from './menu.styled'

interface MenuProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

const MenuContainer = (props: MenuProps) => {
  const {children, style, className} = props
  return (
    <StyledMenuContainer {...{style, className}}>
      {children}
    </StyledMenuContainer>
  )
}

const MenuItem = (props: MenuItemProps) => {
  const {children, danger = false, onClick, style, className} = props
  return (
    <StyledMenuItem {...{danger, onClick, style, className}}>
      {children}
    </StyledMenuItem>
  )
}

const MenuSeparator = () => {
  return <StyledMenuSeparator />
}

export const Menu = {
  Container: MenuContainer,
  Item: MenuItem,
  Separator: MenuSeparator
}
