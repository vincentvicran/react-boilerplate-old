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

interface AppContainerProps extends PropsWithChildren {}

//   MARK: - AppContainer

const AppContainer = ({children}: AppContainerProps) => {
  const [config] = useState<{isLoggedIn: boolean; userRole: UserTypes}>({
    isLoggedIn: false,
    userRole: 'USER'
  })

  return <Auth config={config}>{children}</Auth>
}

export {App}
