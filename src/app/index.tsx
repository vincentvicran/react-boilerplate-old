import {useState, PropsWithChildren, useEffect, useCallback} from 'react'
import {Auth, withNavigation} from 'react-auth-navigation'
import {authenticateUser} from 'src/pages/login/login.slice'

import {useDispatch, useSelector} from 'src/store'

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
  const {authenticating} = useSelector((state) => state.login)
  const dispatch = useDispatch()

  const login = useCallback(
    () => setConfig({isLoggedIn: true, userRole: 'ADMIN'}),
    []
  )

  const logout = useCallback(
    () => setConfig({isLoggedIn: false, userRole: 'USER'}),
    []
  )

  useEffect(() => {
    dispatch(
      authenticateUser({
        onSuccess: () => login()
      })
    )
  }, [])

  if (authenticating) {
    return <div>Authenicating... Please wait...</div>
  }

  return (
    <Auth config={config} state={{login, logout}}>
      {children}
    </Auth>
  )
}

export {App}
