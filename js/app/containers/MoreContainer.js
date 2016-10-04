import React from 'react';
import { Animated, NavigationExperimental, StyleSheet, Text, View } from 'react-native';
import More from '../views/More';
import { States } from '../constants';
const { CardStack: NavigationCardStack, Header: NavigationHeader } = NavigationExperimental;

function renderTitleComponent(props) {
  const { route } = props.scene;
  return (
    <NavigationHeader.Title>
      More ⚙
    </NavigationHeader.Title>
  );
}

function renderHeader(props) {
  return (
    <NavigationHeader
      {...props}
      onNavigateBack={props.onNavigateBack}
      renderTitleComponent={renderTitleComponent}
    />
  )
}

function renderView({ scene, onNewState }) {
  const { route } = scene;
  switch (route.key) {
    case States.MORE_LIST:
      return (<More onNewState={onNewState} />);
    default:
      return (<More onNewState={onNewState} />);
  }
}

function renderAnimatedContainer(props) {
  return (
    <Animated.View style={styles.container}>
      {renderView(props)}
    </Animated.View>
  );
}

function MoreContainer({ scenes, scene, onNavigateBack, onNewState }) {
  const navigationState = scene.route;
  return (
    <NavigationCardStack
      key={'stack_more'}
      navigationState={navigationState}
      renderScene={(props) => renderAnimatedContainer({ ...props, onNewState })}
      renderHeader={(props) => renderHeader({ ...props, onNavigateBack })}
      onNavigateBack={onNavigateBack}
      enableGestures
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MoreContainer;
