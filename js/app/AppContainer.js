import React from 'react';
import { connect } from 'react-redux';
import { Animated, NavigationExperimental, StyleSheet, Text, View } from 'react-native';
import { switchTab, pushState, goBack } from './actions';
import { States } from './constants';
import NewsfeedContainer from './containers/NewsfeedContainer';
import RequestsContainer from './containers/RequestsContainer';
import NotificationsContainer from './containers/NotificationsContainer';
import MoreContainer from './containers/MoreContainer';
import TabBar from './components/TabBar';

const { RootContainer, Transitioner: NavigationTransitioner } = NavigationExperimental;

function renderTab(props) {
  const { route } = props.scene;

  switch (route.key) {
    case States.NEWSFEED:
      return (<NewsfeedContainer {...props} />);
    case States.REQUESTS:
      return (<RequestsContainer {...props} />);
    case States.NOTIFICATIONS:
      return (<NotificationsContainer {...props} />);
    case States.MORE:
      return (<MoreContainer {...props} />);
    default:
      return (<Text>Hello</Text>);
  }
}

function AppContainer(props){
  return (
    <NavigationTransitioner
      {...props}
      render={ (navigationProps) => {
        return (
          <Animated.View style={styles.container}>
            {renderTab({ ...navigationProps, onNavigateBack: props.onNavigateBack, onNewState: props.onNewState })}
            <TabBar />
          </Animated.View>
        );
      }}
    />
  );
};

function createOnNavigate(dispatch) {
  return (action) => {
    dispatch(goBack());
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNavigateBack: createOnNavigate(dispatch),
    onNewState: (state) => dispatch(pushState(state))
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
