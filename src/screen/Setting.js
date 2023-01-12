import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Setting</Text>
    </View>
  );
};

export default Setting;

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
