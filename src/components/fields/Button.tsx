import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  btnName: string;
  submit: (event: GestureResponderEvent) => void;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const {btnName, submit, ...otherProps} = this.props;
    return (
      <TouchableOpacity {...otherProps} onPress={submit}>
        <Text>{btnName}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
