/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

import HomePage from './HomePage';
import FeedsImage from '../assets/menu/Feeds.svg';
import SettingsImage from '../assets/menu/Settings.svg';
import PlusImage from '../assets/menu/Plus.svg';
import Setting from './Setting';
import Add from './Add';

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
            style={styles.myTabBarView}>
            {label.toLowerCase() === 'add' ? (
              <View>
                <View style={styles.addView}>{getIcon(label, isFocused)}</View>
              </View>
            ) : (
              <View style={styles.menuIcon}>{getIcon(label, isFocused)}</View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Upload"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Feeds" component={HomePage} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 70,
    backgroundColor: '#F3F3F3',
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },
  tabBarLabelStyle: {
    fontWeight: '700',
    fontSize: 16,
  },
  tabBarStyle: {
    borderRadius: 15,
  },
  myTabBarView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addView: {
    position: 'absolute',
    backgroundColor: '#49A6FC',
    left: -26,
    top: -60,
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    marginTop: 10,
    marginBottom: 7,
  },
});
