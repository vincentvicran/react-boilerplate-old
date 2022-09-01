import {useFormInput} from 'use-form-input'

import {useDispatch} from 'src/store'

import {login} from './login.slice'

export const Login = () => {
  const dispatch = useDispatch()

  const [data, {onChange, onSubmit}] = useFormInput(
    {
      email: '',
      password: ''
    },
    (values) => {
      if (values.email && values.password) {
        dispatch(login({email: values.email, password: values.password}))
      }
    }
  )

  return (
    <div>
      <h3>Login</h3>

      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={data.email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
