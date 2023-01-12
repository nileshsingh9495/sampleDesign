import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomePage = () => {
  return (
    <View style={{flex:1}}>
      <Text style={styles.textStyle}>HomePage</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
});
