import {useState} from 'react'

import {RippleButton} from 'src/common/button'
import {Toast, ToastContainer, useToast} from 'src/common/toast'
import {Modal} from 'src/common/modal'

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

      <Modal visible={open} onOutsideClick={() => setOpen(false)}>
        <h3>CONTENT GOES HERE</h3>
        <RippleButton color="error" onClick={() => setOpen(false)}>
          Close Modal
        </RippleButton>
      </Modal>

      <div style={{height: 2000}} />

      <ToastContainer>
        <Toast {...handler} />
      </ToastContainer>
    </>
  )
}
