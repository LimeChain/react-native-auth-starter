import * as React from 'react';
import {TextInput, TextInputProps, View, Text} from 'react-native';
import FormStyle from '../../styles/theme.forms';
import {FormFieldChange} from '../../stores/FormStore';

interface FormTextInputProps extends TextInputProps {
  onChange: FormFieldChange;
  placeholderText: string;
  name: string;
  validError?: string | boolean;
}

class FormTextInput extends React.Component<FormTextInputProps> {
  render() {
    const {
      onChange,
      onBlur,
      placeholderText,
      validError,
      ...otherProps
    } = this.props;
    return (
      <View>
        <TextInput
          placeholder={placeholderText}
          onChange={onChange}
          onBlur={onBlur}
          {...otherProps}
        />
        <Text style={FormStyle.formFieldValidError}>{validError || ''}</Text>
      </View>
    );
  }
}

export default FormTextInput;
