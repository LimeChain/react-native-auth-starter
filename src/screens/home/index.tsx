import React, {PureComponent} from 'react';
import {
  GestureResponderEvent,
  Button,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {NavigationStackOptions} from 'react-navigation-stack';

/**
 * The Home screen
 */
export class HomeScreen extends PureComponent<NavigationScreenProps> {
  // screen navigation options

  static navigationOptions = (
    screenProps: NavigationScreenProps,
  ): NavigationStackOptions => {
    // Open drawer view
    const _buttonleftPress = (event: GestureResponderEvent) => {
      console.log('Home headerLeft button pressed!');
      screenProps.navigation.toggleDrawer();
    };

    const _headerLeftDrawerBtn: React.FunctionComponent = props => {
      return <Button title="+" onPress={_buttonleftPress} />;
    };

    return {
      headerLeft: _headerLeftDrawerBtn,
      headerTitle: 'Home Screen',
    };
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
