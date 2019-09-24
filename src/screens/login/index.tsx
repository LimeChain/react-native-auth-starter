import React, {Component} from 'react';
import {
  GestureResponderEvent,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {NavigationStackOptions} from 'react-navigation-stack';
import {observer, inject} from 'mobx-react';
import UserStore from '../../stores/UserStore';

/**
 * The Login screen
 */

export interface Props extends NavigationScreenProps {
  userStore: UserStore;
}
export class LoginScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleEmailChange = (email: string) => {
    this.props.userStore.setEmail(email);
  };

  handlePasswordChange = (password: string) =>
    this.props.userStore.setPassword(password);

  handleLogin = (event: GestureResponderEvent) => {
    event.preventDefault();
    this.props.userStore.login().then(() => alert('1234567890!!!!!!!!!'));
  };

  static navigationOptions = (
    screenProps: NavigationScreenProps,
  ): NavigationStackOptions => {
    return {
      headerTitle: 'Login Screen',
    };
  };

  render() {
    return (
      <View>
        <Text>{this.props.userStore.user.authToken}</Text>
        <Text>{this.props.userStore.user.email}</Text>

        <TextInput onChangeText={this.handleEmailChange} placeholder="Email" />

        <TextInput
          onChangeText={this.handlePasswordChange}
          placeholder="Password"
        />

        <TouchableOpacity>
          <Text onPress={this.handleLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default inject('userStore')(observer(LoginScreen));
