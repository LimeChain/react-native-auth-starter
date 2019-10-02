import React, {Component} from 'react';
import {
  GestureResponderEvent,
  Button,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {
  NavigationStackOptions,
  NavigationStackScreenProps,
} from 'react-navigation-stack';

/**
 * The Home screen
 */
export class HomeScreen extends Component<NavigationStackScreenProps> {
  // screen navigation options

  static navigationOptions = (
    screenProps: NavigationStackScreenProps,
  ): NavigationStackOptions => {
    // Open drawer view
    const _buttonleftPress = (event: GestureResponderEvent) => {
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
