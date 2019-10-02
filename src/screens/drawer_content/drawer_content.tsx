import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {
  ScrollView,
  View,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from 'react-native';
import {ROUTES} from '../../util/util';
import {authService} from '../../services/AuthService';
import {DrawerContentComponentProps} from 'react-navigation-drawer';
import DrawerContainer from '../../styles/theme.drawer.content';

export default class DrawerContent extends Component<
  DrawerContentComponentProps
> {
  logout = (ev: NativeSyntheticEvent<NativeTouchEvent>) => {
    authService.logout().then(() => {
      const navigate = NavigationActions.navigate({
        routeName: ROUTES.AuthLoading,
      });
      this.props.navigation.dispatch(navigate);
    });
  };

  render() {
    return (
      <View style={DrawerContainer.drawerContainer}>
        <ScrollView>
          <Button title="Logout" onPress={this.logout} />
        </ScrollView>
      </View>
    );
  }
}
