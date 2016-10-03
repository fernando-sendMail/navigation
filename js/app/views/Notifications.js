import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Notifications(props) {
  return (
    <View>
      <Text style={styles.title}>
        Notifications 🔴
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22
  }
});

export default Notifications;
