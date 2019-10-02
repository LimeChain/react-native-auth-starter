import React, {Component} from 'react';
import {
  GestureResponderEvent,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import {observer, inject} from 'mobx-react';
import UserStore from '../../stores/UserStore';
import LoginFormStore from '../../stores/LoginFormStore';
import FormStore, {FormFieldChange} from '../../stores/FormStore';
import LoginForm from '../../components/forms/LoginForm';
import Button from '../../components/fields/Button';
import {NavigationActions} from 'react-navigation';
import {ROUTES} from '../../util/util';

/**
 * The Login screen
 */

export interface Props extends NavigationStackScreenProps {
  userStore: UserStore;
  loginFormStore: LoginFormStore;
  onChange: FormFieldChange;
}

export class LoginScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  navigateToScreen = (screen: string) => {
    const navigate = NavigationActions.navigate({
      routeName: ROUTES.AuthLoading,
    });
    this.props.navigation.dispatch(navigate);
  };

  handleLogin = (event: GestureResponderEvent) => {
    console.log('LoginScreen.handleLogin BEGIN');
    event.preventDefault();
    if (this.props.loginFormStore.isFormValid()) {
      this.props.loginFormStore
        .login()
        .then(() => {
          this.navigateToScreen(ROUTES.AuthLoading);
          console.log('LoginScreen.login.then section');
        })
        .catch(err => {
          console.log('LOG ERRRRRRRROR');
        });
    }

    console.log('LoginScreen.handleLogin END');
  };

  static navigationOptions = (
    screenProps: NavigationStackScreenProps,
  ): NavigationStackOptions => {
    return {
      headerTitle: 'Login Screen',
    };
  };

  render() {
    const {loginFormStore} = this.props;
    console.log('this.props', this.props);
    console.log('loginFormStore', loginFormStore);
    return (
      <View>
        <LoginForm onSubmit={this.handleLogin} formStore={loginFormStore} />
        <Button
          btnName="Registration"
          submit={() => this.props.navigation.navigate(ROUTES.MainRegister)}
        />
      </View>
    );
  }
}

export default LoginScreen;
