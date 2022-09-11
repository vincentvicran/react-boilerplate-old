import {useState} from 'react'

import {Button} from 'src/common/button'
import {Toast, useToast} from 'src/common/toast'
import {Modal} from 'src/common/modal'
import {Dropdown} from 'src/common/dropdown'
import {Menu, MenuItem, MenuSeparator} from 'src/common/menu'
import {HStack, VStack} from 'src/common/stack'
import {Tabs, TabsPane} from 'src/common/tabs'

export const Sample = () => {
  const [open, setOpen] = useState(false)
  const {handler, toast} = useToast()

  return (
    <VStack style={{padding: 8}}>
      <HStack>
        <Button color="success" onClick={() => toast.success('Some message')}>
          Open Toast
        </Button>

        <Button color="info" onClick={() => setOpen(true)}>
          Open Modal
        </Button>

        <Menu trigger={() => <Button color="secondary">Open Menu</Button>}>
          <MenuItem onClick={() => false}>First Element</MenuItem>
          <MenuItem onClick={() => false}>Second Element</MenuItem>
          <MenuSeparator />
          <MenuItem onClick={() => false} danger>
            Third Element
          </MenuItem>
        </Menu>

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
      </HStack>

      <HStack style={{backgroundColor: 'yellow'}}>
        <div style={{background: 'red', color: 'white'}}>HStack Item 1</div>
        <div style={{background: 'blue', color: 'white'}}>HStack Item 2</div>
        <div style={{background: 'green', color: 'white'}}>HStack Item 3</div>
      </HStack>

      <VStack style={{backgroundColor: 'orange'}}>
        <div style={{background: 'red', color: 'white'}}>VStack Item 1</div>
        <div style={{background: 'blue', color: 'white'}}>VStack Item 2</div>
        <div style={{background: 'green', color: 'white'}}>VStack Item 3</div>
      </VStack>

      <Tabs
        selectedId="three"
        onTabChange={(tabId) => console.log('TAB CHANGED', tabId)}
      >
        <TabsPane id="one" title="Tab One">
          Tab One Content
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

      <Modal visible={open} onOutsideClick={() => setOpen(false)}>
        <h3>CONTENT GOES HERE</h3>
        <Button color="error" onClick={() => setOpen(false)}>
          Close Modal
        </Button>
      </Modal>

      <Toast {...handler} />
    </VStack>
  )
}
