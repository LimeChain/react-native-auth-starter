import {action, observable, isObservable, runInAction} from 'mobx';
import Validator from 'validatorjs';
import FormStore from './FormStore';
import {authService, RegisterResData} from '../services/AuthService';

import {STORAGE_KEY} from '../util/util';
import UserModel from '../models/UserModel';
import AsyncStorage from '@react-native-community/async-storage';

interface Form {
  fields: [];
}

class RegisterFormStore extends FormStore {
  constructor() {
    super();

    this.form = {
      fields: {
        email: {
          value: '',
          error: false,
          rule: 'required|email',
        },
        password: {
          value: '',
          error: false,
          rule: 'required',
        },
        password_confirmation: {
          value: '',
          error: false,
          rule: 'required|same:password',
        },
      },
      meta: {
        isValid: false,
        error: '',
        submitError: '',
        isLoadingSubmit: false,
      },
    };
  }

  @action async register() {
    this.form.meta.isLoadingSubmit = true;
    await authService
      .register(this.form.fields.email.value, this.form.fields.password.value)
      .then(response => {
        let resData: RegisterResData = response.data;
        let userModel = UserModel.adapt(resData);
        runInAction(() => {
          AsyncStorage.setItem(STORAGE_KEY.AuthToken, userModel.authToken);
          this.form.meta.isLoadingSubmit = false;
        });
      })
      .catch(err => {
        this.form.meta.submitError = err.toString();
        this.form.meta.isLoadingSubmit = false;
        throw err;
      });
  }
}
export default RegisterFormStore;
