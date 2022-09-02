import {useState} from 'react'

import {Button} from 'src/common/button'
import {Toast, ToastContainer, useToast} from 'src/common/toast'
import {Modal} from 'src/common/modal'
import {Dropdown} from 'src/common/dropdown'
import {Menu} from 'src/common/menu'

export const Sample = () => {
  const [open, setOpen] = useState(false)
  const {handler, toast} = useToast()

  return (
    <>
      <Button color="success" onClick={() => toast.success()}>
        Open Toast
      </Button>

      <Button color="info" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Dropdown trigger={() => <Button color="secondary">Open Menu</Button>}>
        <Menu.Container>
          <Menu.Item onClick={() => false}>First Element</Menu.Item>
          <Menu.Item onClick={() => false}>Second Element</Menu.Item>
          <Menu.Separator />
          <Menu.Item onClick={() => false} danger>
            Third Element
          </Menu.Item>
        </Menu.Container>
      </Dropdown>

      <Dropdown trigger={() => <Button>Open Custom Dropdown</Button>}>
        <div
          style={{
            width: 240,
            height: 140,
            backgroundColor: '#3399ff',
            borderRadius: 4
          }}
        />
      </Dropdown>

      <Modal visible={open} onOutsideClick={() => setOpen(false)}>
        <h3>CONTENT GOES HERE</h3>
        <Button color="error" onClick={() => setOpen(false)}>
          Close Modal
        </Button>
      </Modal>

      <ToastContainer>
        <Toast {...handler} />
      </ToastContainer>
    </>
  )
}
