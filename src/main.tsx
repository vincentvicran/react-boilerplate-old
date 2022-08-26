import {Fragment} from 'react'
import ReactDOM from 'react-dom/client'

import {GlobalStyle} from 'src/theme'
import {App} from 'src/app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
)
