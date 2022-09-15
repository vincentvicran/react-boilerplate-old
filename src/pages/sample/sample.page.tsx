import {Button} from 'src/common/button'
import {Toast, useToast} from 'src/common/toast'
import {Modal} from 'src/common/modal'
import {Dropdown} from 'src/common/dropdown'
import {Menu, MenuItem, MenuSeparator} from 'src/common/menu'
import {HStack, VStack, ResponsiveStack} from 'src/common/stack'
import {Tabs, TabsPane, useTabsRef} from 'src/common/tabs'
import {Tooltip} from 'src/common/tooltip'

export const Sample = () => {
  const {handler, toast} = useToast()
  const tabsRef = useTabsRef()

  return (
    <>
      <h2>Tooltip</h2>
      <HStack gap="$2" wrap>
        <Tooltip title="tooltip title" placement="bottomleft">
          <Button color="primary">BOTTOM LEFT</Button>
        </Tooltip>
        <Tooltip title="tooltip title" placement="bottommiddle">
          <Button color="primary">BOTTOM MIDDLE</Button>
        </Tooltip>
        <Tooltip title="tooltip title" placement="bottomright">
          <Button color="primary">BOTTOM RIGHT</Button>
        </Tooltip>
        <Tooltip title="tooltip title" placement="topleft">
          <Button color="primary">TOP LEFT</Button>
        </Tooltip>
        <Tooltip title="tooltip title" placement="topmiddle">
          <Button color="primary">TOP MIDDLE</Button>
        </Tooltip>
        <Tooltip title="tooltip title" placement="topright">
          <Button color="primary">TOP RIGHT</Button>
        </Tooltip>
      </HStack>

      <h2>Toast</h2>
      <Button color="success" onClick={() => toast.success('Some message')}>
        Open Toast
      </Button>

      <h2>Modal</h2>
      <Modal
        trigger={() => <Button color="primary">OPEN MODAL</Button>}
        closeOnOverlayClick={false}
      >
        {(modal) => (
          <div>
            CONTENT GOES HERE
            <Button color="error" onClick={() => modal.close()}>
              CLOSE
            </Button>
          </div>
        )}
      </Modal>

      <h2>Menu</h2>
      <Menu trigger={() => <Button color="secondary">Open Menu</Button>}>
        <MenuItem onClick={() => false}>First Element</MenuItem>
        <MenuItem onClick={() => false}>Second Element</MenuItem>
        <MenuSeparator />
        <MenuItem onClick={() => false} danger>
          Third Element
        </MenuItem>
      </Menu>

      <h2>Dropdown</h2>
      <Dropdown
        triggerToggle
        trigger={() => <Button>Open Custom Dropdown</Button>}
      >
        <div
          style={{
            width: 240,
            height: 140,
            backgroundColor: '#3399ff',
            borderRadius: 4
          }}
        />
      </Dropdown>

      <h2>HStack</h2>
      <HStack style={{backgroundColor: 'yellow'}}>
        <div style={{background: 'red', color: 'white'}}>HStack Item 1</div>
        <div style={{background: 'blue', color: 'white'}}>HStack Item 2</div>
        <div style={{background: 'green', color: 'white'}}>HStack Item 3</div>
      </HStack>

      <h2>VStack</h2>
      <VStack style={{backgroundColor: 'orange'}}>
        <div style={{background: 'red', color: 'white'}}>VStack Item 1</div>
        <div style={{background: 'blue', color: 'white'}}>VStack Item 2</div>
        <div style={{background: 'green', color: 'white'}}>VStack Item 3</div>
      </VStack>

      <ResponsiveStack
        style={{backgroundColor: 'yellow', padding: 2}}
        gap="$0_5"
      >
        <div style={{flex: 1, height: 200, backgroundColor: 'green'}}>
          HStack Item 1
        </div>
        <div style={{flex: 1, height: 200, backgroundColor: 'red'}}>
          HStack Item 2
        </div>
      </ResponsiveStack>

      <h2>Tabs</h2>
      <Tabs ref={tabsRef}>
        <TabsPane id="one" title="Tab One">
          Tab One Content
          <Button onClick={() => tabsRef.current?.setActiveId('two')}>
            GOTO TAB TWO
          </Button>
        </TabsPane>
        <TabsPane
          id="two"
          title={<Button color="primary">SAMPLE BUTTON TEST</Button>}
        >
          Tab Two Content
        </TabsPane>
        <TabsPane id="three" title="Tab Three">
          Tab Three Content
        </TabsPane>
      </Tabs>

      <Toast {...handler} />
    </>
  )
}
