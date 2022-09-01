import {api} from 'src/api'

// MARK: - login
const login = async (data: {email: string; password: string}) => {
  const response = await api.post('auth/login', undefined, data)

  return response.data.data.data
}

export const loginService = {login}
