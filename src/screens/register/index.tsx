import React, {Component} from 'react';
import {GestureResponderEvent, View} from 'react-native';

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
import {NavigationActions} from 'react-navigation';

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

  handleRegister = (event: GestureResponderEvent) => {
    event.preventDefault();
    if (this.props.registerFormStore.isFormValid()) {
      this.props.registerFormStore
        .register()
        .then(() => {
          this.props.navigation.dispatch(
            NavigationActions.navigate({
              routeName: ROUTES.AuthLoading,
            }),
          );
        })
        .catch(err => {
          console.log('Error while trying to register!', err);
        });
    }
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
