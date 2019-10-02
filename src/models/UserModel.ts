import {LoginResData} from '../services/AuthService';

export default class UserModel {
  constructor(
    public authToken: string = '',
    public name?: string,
    public email?: string,
    public password?: string,
  ) {}

  static adapt(item: LoginResData): UserModel {
    return new UserModel(item.token);
  }
}
