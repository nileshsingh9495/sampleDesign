import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';
import GlobalFont from 'react-native-global-font';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardPage from './src/screen/OnboardPage';
import BottomTabNavigator from './src/screen/BottomTabNavigator';

const Stack = createNativeStackNavigator();
const genericStackOptions = {
  headerShown: false,
  animationEnabled: false,
};

LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    GlobalFont.applyGlobal('SF-Pro-Rounded-Regular');
    GlobalFont.applyGlobal('SF-Pro-Rounded-Bold');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={genericStackOptions}
          initialRouteName="Onboard">
          <Stack.Screen name="Home" component={BottomTabNavigator} />
          <Stack.Screen name="Onboard" component={OnboardPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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
