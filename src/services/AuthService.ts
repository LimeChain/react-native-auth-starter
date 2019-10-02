import {API, ApiResponseData, ApiResponseObj, STORAGE_KEY} from '../util/util';
import AsyncStorage from '@react-native-community/async-storage';

export interface LoginResData extends ApiResponseData {
  token: string;
}

export interface RegisterResData extends ApiResponseData {
  id: string;
  token: string;
}

class AuthService {
  constructor(
    private loginBaseUrl = '/api/login?delay=3',
    private registerBaseUrl = '/api/register',
  ) {}

  async logout(): Promise<void> {
    AsyncStorage.removeItem(STORAGE_KEY.AuthToken);
  }

  login(
    email?: string,
    password?: string,
  ): Promise<ApiResponseObj<LoginResData>> {
    try {
      return API.post(this.loginBaseUrl, {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log('Error AuthService.login catch block!', error);
      throw error;
    }
  }

  register(
    email?: string,
    password?: string,
  ): Promise<ApiResponseObj<RegisterResData>> {
    try {
      return API.post(this.registerBaseUrl, {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log('Error AuthService.register catch block!', error);
      throw error;
    }
  }
}

export const authService = new AuthService();
