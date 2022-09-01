import {useEffect} from 'react'
import {PublicPath, PrivatePath, useNavigation} from 'react-auth-navigation'

import {Login} from 'src/pages/login'
import {Sample} from 'src/pages/sample'

// MARK: - Redirect
const Redirect = ({to}: {to: string}) => {
  const {navigation} = useNavigation()
  useEffect(() => {
    navigation.navigate(to)
  }, [to])
  return null
}

export const publicPaths: PublicPath = [
  {
    name: 'Root',
    path: '/',
    component: () => <Redirect to="/login" />,
    restricted: true
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    restricted: true
  }
]

export const privatePaths: PrivatePath = [
  {
    name: 'Home',
    path: '/home',
    component: Sample
  }
]
