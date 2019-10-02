import React, {Component} from 'react';
import {
  GestureResponderEvent,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {observer, inject} from 'mobx-react';
import UserStore from '../../stores/UserStore';
import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack';
import RegisterForm from '../../components/forms/RegisterForm';
import Button from '../../components/fields/Button';
import {ROUTES} from '../../util/util';
import {FormFieldChange} from '../../stores/FormStore';
import RegisterFormStore from '../../stores/RegisterFormStore';

/**
 * The Register screen
 */

export interface Props extends NavigationStackScreenProps {
  userStore: UserStore;
  registerFormStore: RegisterFormStore;
  onChange: FormFieldChange;
}

export class RegisterScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleEmailChange = (email: string) => {
    this.props.userStore.setEmail(email);
  };

  handlePasswordChange = (password: string) =>
    this.props.userStore.setPassword(password);

  handleRegister = (event: GestureResponderEvent) => {
    event.preventDefault();
    this.props.userStore
      .register()
      .then(() => console.log('userStore.register called'));
  };

  static navigationOptions = (
    screenProps: NavigationStackScreenProps,
  ): NavigationStackOptions => {
    return {
      headerTitle: 'Register Screen',
    };
  };

  render() {
    const {registerFormStore} = this.props;
    console.log('this.props', this.props);
    console.log('registerFormStore', registerFormStore);
    return (
      <View>
        <RegisterForm
          onSubmit={this.handleRegister}
          formStore={registerFormStore}
        />
        <Button
          btnName="Login"
          submit={() => this.props.navigation.navigate(ROUTES.MainLogin)}
        />
      </View>
    );
  }
}

export default inject('userStore')(observer(RegisterScreen));
