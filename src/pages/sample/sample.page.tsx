import {RippleButton} from 'src/common/button'
import {Toast, ToastContainer, useToast} from 'src/common/toast'

import {api} from 'src/api'

export const Sample = async () => {
  const {handler, toast} = useToast()

  return (
    <>
      <RippleButton color="success" onClick={() => toast.success()}>
        Success Button
      </RippleButton>
      <RippleButton color="error" onClick={() => toast.error()}>
        Error Button
      </RippleButton>
      <RippleButton color="info" onClick={() => toast.info()}>
        Info Button
      </RippleButton>
      <RippleButton color="warning" onClick={() => toast.warning()}>
        Warning Button
      </RippleButton>

      <ToastContainer>
        <Toast {...handler} />
      </ToastContainer>
    </>
  )
}
