import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { switchTab } from '../actions';
import { States } from '../constants';

const UNDERLAY_COLOR = '#eee';
const TABS = [
  {
    label: 'Newsfeed',
    state: States.NEWSFEED
  },
  {
    label: 'Requests',
    state: States.REQUESTS
  },
  {
    label: 'Notifications',
    state: States.NOTIFICATIONS
  },
  {
    label: 'More',
    state: States.MORE
  },
]

function TabItem(props) {
  const { index, onTabPress, tab } = props;
  return (
    <TouchableHighlight
      style={styles.tabItem}
      onPress={()=> onTabPress(tab.state)}
      underlayColor={UNDERLAY_COLOR}
    >
      <Text style={styles.label}>
        {tab.label}
      </Text>
    </TouchableHighlight>
  )
}

function TabBar(props) {
  return (
    <View style={styles.container}>
      {TABS.map((tab, index) => {
        const tabProps = {
          tab,
          onTabPress: props.onTabPress
        };
        return (
          <TabItem key={index} {...tabProps} />
        );
      })}
    </View>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onTabPress: (state) => dispatch(switchTab(state))
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: '#555',
    fontSize: 9
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
