import {observable, action} from 'mobx';
import User from '../models/UserModel';
import {authService} from '../services/AuthService';

export default class AppStore {
  @observable isLoading: boolean = true;
  @observable isFailure: boolean = false;
  @observable user: User | null = null;

  @action setInitialUser(data: User) {
    this.user = data;
    this.isLoading = false;
  }
  /*
  @action async login(email: string, password: string) {
    try {
      const data = await authService.login(email, password);
      this.isLoading = false;
      this.user = data;
    } catch (e) {
      this.isLoading = false;
      this.isFailure = true;
    }
  }
  */
}
