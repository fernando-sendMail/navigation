import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Requests(props) {
  return (
    <View>
      <Text style={styles.title}>
        Friend requests 👥
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22
  }
});

export default Requests;
