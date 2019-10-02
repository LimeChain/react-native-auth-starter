import {StyleSheet} from 'react-native';
import theme from './theme.variables';

export default StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  formFieldValidError: {
    color: theme.COLOR_THEME_ERROR,
  },
  formSubmitError: {
    color: theme.COLOR_THEME_ERROR,
  },
});
