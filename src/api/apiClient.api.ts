import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

import {getCookie} from 'src/helpers'

import {PathToResponse} from './pathToResponse.api'

// MARK: - instance
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

// MARK: - getParsedUrl
const getParsedUrl = (
  url: string,
  params?: {[key: string]: number | string}
) => {
  if (!params) {
    return url
  }

  let urlString = ''
  Object.keys(params).forEach((key, index, array) => {
    if (params[key] !== undefined && params[key] !== null) {
      urlString += `${index === 0 ? '?' : ''}${key}=${params[key]}${
        index !== array.length - 1 ? '&' : ''
      }`
    }
  })

  return url + urlString
}

// MARK: - getInstance
const getInstance =
  (method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch') =>
  <TPath extends keyof PathToResponse>(
    url: TPath,
    params?: PathToResponse[TPath]['params'],
    data?: PathToResponse[TPath]['body'],
    config?: Omit<
      AxiosRequestConfig<any>,
      'baseURL' | 'url' | 'method' | 'data'
    >
  ): Promise<AxiosResponse<PathToResponse[TPath]['response']>> =>
    instance({url: getParsedUrl(url, params), method, data, ...config})

const api = {
  get: getInstance('get'),
  delete: getInstance('delete'),
  head: getInstance('head'),
  options: getInstance('options'),
  post: getInstance('post'),
  put: getInstance('put'),
  patch: getInstance('patch')
}

// MARK: apiv2
const apiv2 =
  <
    ApiResponse extends unknown,
    ApiParams extends {[key: string]: number | string} = {},
    ApiBody extends unknown = {}
  >(
    method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch'
  ) =>
  (
    url: string,
    params?: ApiParams,
    data?: ApiBody,
    config?: Omit<
      AxiosRequestConfig<any>,
      'baseURL' | 'url' | 'method' | 'data'
    >
  ): Promise<AxiosResponse<ApiResponse>> =>
    instance({url: getParsedUrl(url, params), method, data, ...config})

export {instance, api, apiv2}
