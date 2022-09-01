import {useState, PropsWithChildren} from 'react'
import {Auth, withNavigation} from 'react-auth-navigation'

import {publicPaths, privatePaths} from './routes.app'
import {userRoles, UserTypes} from './userRoles.app'

const App = withNavigation(
  () => (
    <AppContainer>
      <Auth.Screens />
    </AppContainer>
  ),
  {
    publicPaths,
    privatePaths,
    userRoles
  }
)

//   MARK: - AppContainer

const AppContainer = ({children}: PropsWithChildren) => {
  const [config, setConfig] = useState<{
    isLoggedIn: boolean
    userRole: UserTypes
  }>({
    isLoggedIn: false,
    userRole: 'USER'
  })

  return (
    <Auth
      config={config}
      state={{
        login: () => setConfig({isLoggedIn: true, userRole: 'USER'}),
        logout: () => setConfig({isLoggedIn: false, userRole: 'USER'})
      }}
    >
      {children}
    </Auth>
  )
}

export {App}
