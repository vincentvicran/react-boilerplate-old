import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

import {getCookie} from 'src/helpers'

import {PathToResponse} from './pathToResponse.api'

const instance: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? import.meta.env.REACT_APP_DEV_URL
      : import.meta.env.REACT_APP_PROD_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// MARK: - interceptor

instance.interceptors.request.use(async (request) => {
  const token = getCookie('@token')
  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

// TODO: - intercept the params as well

const getInstance =
  (method: 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH') =>
  <T extends keyof PathToResponse>(
    url: T,
    data?: PathToResponse[T]['body'],
    config?: Omit<
      AxiosRequestConfig<any>,
      'baseURL' | 'url' | 'method' | 'data'
    >
  ): Promise<AxiosResponse<PathToResponse[T]['response']>> =>
    instance({url, method, data, ...config})

const api = {
  get: getInstance('GET'),
  delete: getInstance('DELETE'),
  head: getInstance('HEAD'),
  options: getInstance('OPTIONS'),
  post: getInstance('POST'),
  put: getInstance('PUT'),
  patch: getInstance('PATCH')
}

export {instance, api}
