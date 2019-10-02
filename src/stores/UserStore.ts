import {observable, action, runInAction} from 'mobx';
import UserModel from '../models/UserModel';
import {STORAGE_KEY} from '../util/util';
import {
  authService,
  LoginResData,
  RegisterResData,
} from '../services/AuthService';
import AsyncStorage from '@react-native-community/async-storage';

export default class UserStore {
  @observable isLoading: boolean = true;
  @observable isFailure: boolean = false;
  @observable user: UserModel = new UserModel();

  @action setInitialUser(data: UserModel) {
    this.user = data;
    this.isLoading = false;
  }

  @action setEmail(email: string) {
    this.user.email = email;
  }

  @action setPassword(password: string) {
    this.user.password = password;
  }

  @action async login() {
    authService.login(this.user.email, this.user.password).then(response => {
      let resData: LoginResData = response.data;
      let userModel = UserModel.adapt(resData);
      runInAction(async () => {
        this.isLoading = false;
        this.user = userModel;
        AsyncStorage.setItem(STORAGE_KEY.AuthToken, userModel.authToken);
      });
    });
  }

  @action async register() {
    authService.register(this.user.email, this.user.password).then(response => {
      let resData: RegisterResData = response.data;
      let userModel = UserModel.adapt(resData);
      runInAction(() => {
        this.isLoading = false;
        this.user = userModel;
      });
    });
  }
}
