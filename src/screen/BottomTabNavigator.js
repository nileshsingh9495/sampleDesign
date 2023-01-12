/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Cards from '../components/Cards';
import FeedsImage from '../assets/menu/Feeds.svg';
import SettingsImage from '../assets/menu/Settings.svg';
import PlusImage from '../assets/menu/Plus.svg';
import Setting from './Setting';
import Add from './Add';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';

const width = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const getIcon = (label, isFocused = false) => {
  const labelSelected = label.toLowerCase();
  if (labelSelected === 'feeds') {
    return <FeedsImage />;
  } else if (labelSelected === 'setting') {
    return <SettingsImage />;
  } else if (labelSelected === 'add') {
    return <PlusImage />;
  }
};

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              //   borderBottomWidth: 3,
              //   borderBottomColor: isFocused ? 'orange' : 'green',
            }}>
            {label.toLowerCase() === 'add' ? (
              <View>
                <View
                  style={{
                    // marginTop: 10,
                    // marginBottom: 7,
                    position: 'absolute',
                    backgroundColor: '#49A6FC',
                    left: -26,
                    // right: 0,
                    // bottom: 0,
                    top: -60,
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {getIcon(label, isFocused)}
                </View>
              </View>
            ) : (
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 7,
                  // position:'absolute'
                }}>
                {getIcon(label, isFocused)}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Upload"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 16,
        },
        tabBarStyle: {
          //   position: 'absolute',
          //   backgroundColor: 'skyblue',
          //   bottom: 25,
          //   left: 25,
          //   right: 20,
          //   elevation: 0,
          //   height: 80,
          borderRadius: 15,
        },
        // tabBarActiveTintColor: '#3777de',
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Feeds" component={HomePage} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 70,
    backgroundColor: '#F3F3F3',
    // borderRadius: 10,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },
});
