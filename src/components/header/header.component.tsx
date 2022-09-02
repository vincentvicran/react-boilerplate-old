import {useAuth} from 'react-auth-navigation'

export const Header = () => {
  const auth = useAuth()

  return auth.isLoggedIn ? (
    <div>
      <h1>Heading</h1>
      <button onClick={() => auth.logout()}>Logout</button>
    </div>
  ) : (
    <></>
  )
}
