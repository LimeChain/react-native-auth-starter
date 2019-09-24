import React, {Component} from 'react';
import {
  GestureResponderEvent,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {observer, inject} from 'mobx-react';
import UserStore from '../../stores/UserStore';
import {NavigationStackOptions} from 'react-navigation-stack';

/**
 * The Register screen
 */

export interface Props extends NavigationScreenProps {
  userStore: UserStore;
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
    this.props.userStore.register().then(() => alert('1234567890!!!!!!!!!'));
  };

  static navigationOptions = (
    screenProps: NavigationScreenProps,
  ): NavigationStackOptions => {
    return {
      headerTitle: 'Register Screen',
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
          <Text onPress={this.handleRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default inject('userStore')(observer(RegisterScreen));
