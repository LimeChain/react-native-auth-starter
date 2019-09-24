import {API, ApiResponseData, ApiResponseObj} from '../util/util';

export interface LoginResData extends ApiResponseData {
  token: string;
}

export interface RegisterResData extends ApiResponseData {
  id: string;
  token: string;
}

class AuthService {
  constructor(
    private loginBaseUrl = '/api/login',
    private registerBaseUrl = '/api/register',
  ) {}

  async login(
    email?: string,
    password?: string,
  ): Promise<ApiResponseObj<LoginResData>> {
    try {
      return await API.post(this.loginBaseUrl, {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log('Error AuthService.login catch block!', error);
      throw error;
    }
  }

  async register(
    email?: string,
    password?: string,
  ): Promise<ApiResponseObj<RegisterResData>> {
    try {
      return await API.post(this.registerBaseUrl, {
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
