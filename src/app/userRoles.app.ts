type UserTypes = 'USER' | 'ADMIN'
type UserRoles = {
  [key in UserTypes]: {access: Array<string>}
}

const userRoles: UserRoles = {
  USER: {
    access: ['/', '/login']
  },
  ADMIN: {
    access: ['*']
  }
}

export {userRoles}
export type {UserTypes}
