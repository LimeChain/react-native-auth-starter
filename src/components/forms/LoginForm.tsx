import React from 'react';
import {View, ViewProps, GestureResponderEvent, Text} from 'react-native';
import FormTextInput from '../fields/FormTextInput';
import Button from '../fields/Button';
import FormStyle from '../../styles/theme.forms';
import {observer} from 'mobx-react';
import LoginFormStore from '../../stores/LoginFormStore';

export interface Props extends ViewProps {
  onSubmit: (event: GestureResponderEvent) => void;
  formStore: LoginFormStore;
}

class LoginForm extends React.Component<Props> {
  render() {
    const {onSubmit, formStore, ...otherProps} = this.props;

    return (
      <View {...otherProps} style={FormStyle.formContainer}>
        <FormTextInput
          placeholderText="Email"
          name="email"
          onChange={formStore.onFieldChange}
          onBlur={formStore.onBlur}
          value={formStore.form.fields.email.value}
          validError={formStore.form.fields.email.error}
        />
        <FormTextInput
          placeholderText="Password"
          name="password"
          onChange={formStore.onFieldChange}
          onBlur={formStore.onBlur}
          value={formStore.form.fields.password.value}
          validError={formStore.form.fields.password.error}
        />
        <Button
          btnName="Login"
          submit={onSubmit}
          disabled={formStore.form.meta.isLoadingSubmit}
        />
        <Text style={FormStyle.formSubmitError}>
          {formStore.form.meta.submitError || ''}
        </Text>
      </View>
    );
  }
}

export default observer(LoginForm);
