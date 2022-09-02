import React, {
  Children,
  useMemo,
  ReactNode,
  useState,
  ReactElement,
  useEffect,
  useCallback
} from 'react'

import {TabsStyled, TabsHeaderStyled, TabsPaneStyled} from './tabs.style'

interface TabsProps {
  children: any
  onTabChange?: (tabId: string) => void
}

export const Tabs = ({children, onTabChange}: TabsProps) => {
  const tabElements: Array<{
    id: string
    title: ReactNode
    element: ReactElement
  }> = useMemo(
    () =>
      Children.map(children, (element) => ({
        id: element.props.id,
        title: element.props.title,
        element
      })),
    []
  )

  const [activeId, setActiveId] = useState(tabElements[0].id)

  const activeTab = useMemo(
    () => tabElements.find((el) => el.id === activeId),
    [tabElements, activeId]
  )

  const handleTabChange = useCallback<
    (e: React.MouseEvent<HTMLSpanElement>, tabId: string) => void
  >((e, tabId) => {
    e.stopPropagation()
    setActiveId(tabId)
  }, [])

  useEffect(() => {
    onTabChange?.(activeId)
  }, [activeId])

  if (!activeTab) {
    return null
  }

  return (
    <TabsStyled>
      <TabsHeaderStyled>
        {tabElements.map((element) =>
          typeof element.title === 'string' ? (
            <span
              key={element.id}
              onClick={(e) => handleTabChange(e, element.id)}
            >
              {element.title}
            </span>
          ) : (
            <span
              key={element.id}
              onClick={(e) => handleTabChange(e, element.id)}
            >
              {element.title}
            </span>
          )
        )}
      </TabsHeaderStyled>

      {activeTab.element}
    </TabsStyled>
  )
}

interface TabsPaneProps {
  title: ReactNode
  children: ReactNode
  id: string
}

const TabsPane = ({children}: TabsPaneProps) => {
  return <TabsPaneStyled>{children}</TabsPaneStyled>
}

Tabs.Pane = TabsPane
