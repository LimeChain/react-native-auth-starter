import {LoginResData} from '../services/AuthService';

export default class UserModel {
  constructor(
    public authToken: string = '',
    public name?: string,
    public email?: string,
    public password?: string,
  ) {}

  static adapt(item: LoginResData): UserModel {
    console.log('item', item);
    return new UserModel(item.token);
  }
}
