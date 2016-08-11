import React from 'react';
import {
  NavigationExperimental,
  View
} from 'react-native';

import { connect } from 'react-redux';

const {
  RootContainer
} = NavigationExperimental;

import {
  switchTab,
  pushState,
  goBack
} from './actions';

const AppContainer = (props) => {
  return (
    <View>
    </View>
  )
};

function createOnNavigate(dispatch) {
  return (action) => {
    if(action === RootContainer.getBackAction().type) {
      dispatch(goBack());
    }
  }
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNavigate: createOnNavigate(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
