import {useState} from 'react'

import {RippleButton} from 'src/common/button'
import {Toast, ToastContainer, useToast} from 'src/common/toast'
import {Modal} from 'src/common/modal'
import {Dropdown} from 'src/common/dropdown'
import {Menu} from 'src/common/menu'

export const Sample = () => {
  const [open, setOpen] = useState(false)
  const {handler, toast} = useToast()

  return (
    <>
      <RippleButton color="success" onClick={() => toast.success()}>
        Open Toast
      </RippleButton>

      <RippleButton color="info" onClick={() => setOpen(true)}>
        Open Modal
      </RippleButton>

      <Dropdown
        trigger={() => <RippleButton color="secondary">Open Menu</RippleButton>}
      >
        <Menu.Container>
          <Menu.Item onClick={() => false}>First Element</Menu.Item>
          <Menu.Item onClick={() => false}>Second Element</Menu.Item>
          <Menu.Separator />
          <Menu.Item onClick={() => false} danger>
            Third Element
          </Menu.Item>
        </Menu.Container>
      </Dropdown>

      <Dropdown
        trigger={() => <RippleButton>Open Custom Dropdown</RippleButton>}
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

      <Modal visible={open} onOutsideClick={() => setOpen(false)}>
        <h3>CONTENT GOES HERE</h3>
        <RippleButton color="error" onClick={() => setOpen(false)}>
          Close Modal
        </RippleButton>
      </Modal>

      <ToastContainer>
        <Toast {...handler} />
      </ToastContainer>
    </>
  )
}
