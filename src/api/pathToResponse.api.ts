/**
 * Interface PathToResponse defines the type for path key and their response
 * each api must have their respective path key type and their response type
 *
 * dynamic paths: [path: string]: ResponseType
 * static paths: string: ResponseType
 *
 * NOTE: The path string mustn't have a leading slash '/'
 */

export interface PathToResponse {
  'users/list': {
    data: Array<string>
  }
  [path: `user/${number}`]: {
    name: string
  }
}
