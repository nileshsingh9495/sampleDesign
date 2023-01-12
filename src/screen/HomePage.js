import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.mornigText}>Good Morning</Text>

      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  mornigText: {
    fontSize:34,
    fontWeight:'700',
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: 'black',
  },
});
