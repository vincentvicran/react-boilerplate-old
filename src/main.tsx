import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import {store} from 'src/store'
import './sass/main.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import {HashRouter, useRoutes} from 'react-router-dom'
import {AuthProvider} from './app/routing'
import {Router} from './app/routing/routes'
import {Toaster} from 'react-hot-toast'
import {Footer, Header, VStack} from './app/common'

const MemoChild = () => {
  return (
    <AuthProvider>
      <Header />
      <VStack justify="space-between" style={{minHeight: 'calc(100vh - 55px'}}>
        <App />
        <Footer />
      </VStack>
    </AuthProvider>
  )
}

const App = () => {
  return (
    <div>
      {useRoutes(Router)}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <MemoChild />
    </Provider>
  </HashRouter>
)
