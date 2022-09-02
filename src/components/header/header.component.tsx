import {useAuth} from 'react-auth-navigation'

export const Header = () => {
  const auth = useAuth()

  if (!auth.isLoggedIn) {
    return null
  }

  return (
    <div>
      <h1>Heading</h1>
      <button onClick={() => auth.logout()}>Logout</button>
    </div>
  )
}
