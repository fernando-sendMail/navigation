import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { States } from '../constants';

function Notifications(props) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => props.onNewState(States.MORE_LIST + Date.now())}
      >
        <Text style={styles.title}>
          Click for more
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  }
});

export default Notifications;
