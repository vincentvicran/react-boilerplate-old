import Theme from 'src/theme'
import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
  min-width: 400px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: ${Theme.radius.$default};
  box-shadow: ${Theme.shadows.$z6};
  font-family: Arial;
`
