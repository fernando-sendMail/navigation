import React from 'react';
import { Animated, NavigationExperimental, StyleSheet, Text } from 'react-native';
import { States } from '../constants';
import Requests from '../views/Requests';

const { Transitioner: NavigationTransitioner } = NavigationExperimental;

function renderView({ scene }) {
  const { route } = scene;
  switch (route.key) {
    case States.REQUESTS_LIST:
      return (<Requests />)
    default:
      return (<Text>{`No view for state: ${route.key}`}</Text>);
  }
}

function renderAnimatedContainer(props) {
  return (
    <Animated.View style={styles.container}>
      {renderView(props)}
    </Animated.View>
  )
}

function RequestsContainer({ scene }) {
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

export default RequestsContainer;
