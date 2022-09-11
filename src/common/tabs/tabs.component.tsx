import React, {
  Children,
  useMemo,
  ReactNode,
  useState,
  ReactElement,
  useEffect,
  useCallback,
  useRef
} from 'react'
import {
  AnimatedBlock,
  AnimationConfigUtils,
  useAnimatedValue
} from 'react-ui-animate'

import {
  TabsStyled,
  TabsHeaderStyled,
  TabsPaneStyled,
  TabHeaderItemStyled
} from './tabs.style'

interface TabsProps {
  children: any
  selectedId?: string
  onTabChange?: (tabId: string) => void
}

export const Tabs = React.forwardRef<any, TabsProps>(
  ({children, selectedId, onTabChange}: TabsProps) => {
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

    const [activeId, setActiveId] = useState(selectedId ?? tabElements[0].id)
    const tabsMeasurements = useRef(Array(tabElements.length).fill(null))
    const tabWidth = useAnimatedValue(0, {
      ...AnimationConfigUtils.POWER4
    })
    const tabLeft = useAnimatedValue(0, {
      ...AnimationConfigUtils.POWER4
    })

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

      const activeIndex = tabElements.findIndex((e) => e.id === activeId)
      tabWidth.value = tabsMeasurements.current[activeIndex].offsetWidth
      tabLeft.value = tabsMeasurements.current[activeIndex].offsetLeft
    }, [activeId])

    if (!activeTab) {
      return null
    }

    return (
      <TabsStyled>
        <TabsHeaderStyled>
          {tabElements.map((element, index) => (
            <span
              ref={(r) => (tabsMeasurements.current[index] = r)}
              key={element.id}
            >
              {typeof element.title === 'string' ? (
                <TabHeaderItemStyled
                  onClick={(e) => handleTabChange(e, element.id)}
                >
                  {element.title}
                </TabHeaderItemStyled>
              ) : (
                <span onClick={(e) => handleTabChange(e, element.id)}>
                  {element.title}
                </span>
              )}
            </span>
          ))}

          <AnimatedBlock
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'red',
              height: 4,
              width: tabWidth.value,
              left: tabLeft.value
            }}
          />
        </TabsHeaderStyled>

        {activeTab.element}
      </TabsStyled>
    )
  }
)

interface TabsPaneProps {
  title: ReactNode
  children: ReactNode
  id: string
}

export const TabsPane = ({children}: TabsPaneProps) => {
  return <TabsPaneStyled>{children}</TabsPaneStyled>
}
