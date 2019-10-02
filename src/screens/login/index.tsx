import React, {Component} from 'react';
import {GestureResponderEvent, View} from 'react-native';

import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import UserStore from '../../stores/UserStore';
import LoginFormStore from '../../stores/LoginFormStore';
import {FormFieldChange} from '../../stores/FormStore';
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

  handleLogin = (event: GestureResponderEvent) => {
    event.preventDefault();
    if (this.props.loginFormStore.isFormValid()) {
      this.props.loginFormStore
        .login()
        .then(() => {
          this.props.navigation.dispatch(
            NavigationActions.navigate({
              routeName: ROUTES.AuthLoading,
            }),
          );
        })
        .catch(err => {
          console.log('Error while trying to login!', err);
        });
    }
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
