import {ReactNode, useState} from 'react'

import {Modal} from 'src/common/modal'

interface TriggerModalProps {
  displayElement: ReactNode
  children: ({close}: {close: () => void}) => React.ReactNode
}

export const CustomModal = ({displayElement, children}: CustomModalProps) => {
  const [visible, setVisible] = useState(false)

  const close = () => {
    setVisible(false)
  }

  return (
    <>
      <span
        onClick={(e) => {
          e.preventDefault()
          setVisible(true)
        }}
      >
        {displayElement}
      </span>

      <Modal visible={visible} onOutsideClick={() => setVisible(false)}>
        {children({close})}
      </Modal>
    </>
  )
}
