import React from 'react';
import { Animated, NavigationExperimental, StyleSheet, Text } from 'react-native';
import Notifications from '../views/Notifications';
import { States } from '../constants';
const { Transitioner: NavigationTransitioner, CardStack: NavigationCardStack, Header: NavigationHeader  } = NavigationExperimental;


function renderView({ scene }) {
  const { route } = scene;
  console.log(route);
  switch (route.key) {
    case States.NOTIFICATIONS_LIST:
      return (<Notifications />);
    default:
      return (<Text>{`No view for state: ${route.key}`}</Text>);
  }
}

function renderAnimatedContainer(props) {
  return (
    <Animated.View style={styles.container}>
      {renderView(props)}
    </Animated.View>
  );
}

function NotificationsContainer({ scene, onNewState, onNavigateBack }) {
  const navigationState = scene.route;
  return (
    <NavigationTransitioner
      navigationState={navigationState}
      render={renderAnimatedContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NotificationsContainer;
