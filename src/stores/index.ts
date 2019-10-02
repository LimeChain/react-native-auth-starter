import UserStore from './UserStore';
import LoginFormStore from './LoginFormStore';
import RegisterFormStore from './RegisterFormStore';

export default {
  userStore: new UserStore(),
  loginFormStore: new LoginFormStore(),
  registerFormStore: new RegisterFormStore(),
};
