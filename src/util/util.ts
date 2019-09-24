import axios, {AxiosPromise, AxiosResponse} from 'axios';

// Setting ReqRes API host for testing purposes.
axios.defaults.baseURL = 'https://reqres.in/';

// Export axios as a library for managing API calls.
export const API = axios;

export interface ApiResponseData {}

// Export ApiResponseObj as a response object type.
export interface ApiResponseObj<T = ApiResponseData> extends AxiosResponse<T> {}

// Export ApiResponse as a return type of any API request.
export interface ApiResponse extends Promise<any> {}
