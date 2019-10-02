import React from 'react';
import {View, ViewProps, GestureResponderEvent, Text} from 'react-native';
import FormTextInput from '../fields/FormTextInput';
import Button from '../fields/Button';
import FormStyle from '../../styles/theme.forms';
import {observer} from 'mobx-react';
import RegisterFormStore from '../../stores/RegisterFormStore';
import {FormFieldChange} from '../../stores/FormStore';

export interface Props extends ViewProps {
  onSubmit: (event: GestureResponderEvent) => void;
  formStore: RegisterFormStore;
}

class RegisterForm extends React.Component<Props> {
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
        <FormTextInput
          placeholderText="Password Confirmation"
          name="password_confirmation"
          onChange={formStore.onFieldChange}
          onBlur={formStore.onBlur}
          value={formStore.form.fields.password_confirmation.value}
          validError={formStore.form.fields.password_confirmation.error}
        />
        <Text>{formStore.form.meta.submitError || ''}</Text>
        <Button
          btnName="Register"
          submit={onSubmit}
          disabled={formStore.form.meta.isLoadingSubmit}
        />
      </View>
    );
  }
}

export default observer(RegisterForm);
