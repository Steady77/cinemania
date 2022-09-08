export interface IUserCred {
  email: string;
  password: string;
}

export interface IAuthState {
  authData: IUserCred | null;
  isAuth: boolean;
}
