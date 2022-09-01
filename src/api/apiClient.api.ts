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

const api = {
  get: <T extends keyof PathToResponse>(
    url: T,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> => instance.get(url, config),
  delete: <T extends keyof PathToResponse>(
    url: T,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> => instance.delete(url, config),
  head: <T extends keyof PathToResponse>(
    url: T,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> => instance.head(url, config),
  options: <T extends keyof PathToResponse>(
    url: T,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> => instance.options(url, config),
  post: <T extends keyof PathToResponse>(
    url: T,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> =>
    instance.post(url, data, config),
  put: <T extends keyof PathToResponse>(
    url: T,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> =>
    instance.put(url, data, config),
  patch: <T extends keyof PathToResponse>(
    url: T,
    data: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<PathToResponse[T]>> =>
    instance.patch(url, data, config)
}

export {instance, api}
