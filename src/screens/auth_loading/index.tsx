import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ROUTES} from '../../util/util';
import {STORAGE_KEY} from '../../util/util';
import {NavigationStackScreenProps} from 'react-navigation-stack';

export class AuthLoadingScreen extends Component<NavigationStackScreenProps> {
  componentDidMount() {
    this._bootstrapAsync();
  }

  sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // Simulated delay in order to display the loading screen for demo purposes
    // Please remove the sleep function and the next line when starting a new project
    await this.sleep(2000);

    const userToken = await AsyncStorage.getItem(STORAGE_KEY.AuthToken);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(
      userToken ? ROUTES.AppStack : ROUTES.AuthStack,
    );
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Text>AuthLoadingScreen</Text>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
