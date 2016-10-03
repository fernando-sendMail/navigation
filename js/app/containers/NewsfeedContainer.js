import React from 'react';
import { Animated, NavigationExperimental, StyleSheet, Text } from 'react-native';
import { States } from '../constants';
import TopStories from '../views/TopStories';
import ProfileContainer from './ProfileContainer';

const { CardStack: NavigationCardStack, Header: NavigationHeader } = NavigationExperimental;

function selectTitle(key) {
  switch (key) {
    case States.TOP_STORIES:
      return 'Newsfeed';
    case States.USER_PROFILE:
      return 'Profile';
    default:
      return 'Story';
  }
}

function renderTitleComponent(props) {
  const { route } = props.scene;
  return (
    <NavigationHeader.Title>
      {selectTitle(route.key)}
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

function renderView({ scene, onNewState}) {
  const { route } = scene;
  switch(route.key) {
    case States.TOP_STORIES:
      return (<TopStories onNewState={onNewState} />);
    case States.USER_PROFILE:
      return (<ProfileContainer navigationState={route} />);
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

function Newsfeed({ scene, onNewState, onNavigateBack }) {
  const navigationState = scene.route;
  return (
    <NavigationCardStack
      navigationState={navigationState}
      renderScene={(props) => renderAnimatedContainer({ ...props, onNewState })}
      renderOverlay={(props) => renderHeader({ ...props, onNavigateBack })}
      onNavigateBack={onNavigateBack}
      enableGestures
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  }
});

export default Newsfeed;
