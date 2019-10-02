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
}
