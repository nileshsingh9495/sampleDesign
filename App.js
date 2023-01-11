import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  textStyle: {
    color: '#000',
  },
});
