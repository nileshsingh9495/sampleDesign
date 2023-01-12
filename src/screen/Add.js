import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Add = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Add</Text>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#000',
  },
});
