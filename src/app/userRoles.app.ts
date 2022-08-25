type UserTypes = 'USER';
type UserRoles = {
  [key in UserTypes]: { access: Array<string> };
};

const userRoles: UserRoles = {
  USER: {
    access: ['*']
  }
};

export { userRoles };
export type { UserTypes };
