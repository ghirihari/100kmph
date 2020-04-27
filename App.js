import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/HomeScreen'
import CalculatorScreen from './src/CalculatorScreen'
import RideScreen from './src/RideScreen'
import UserScreen from './src/UserScreen'
import ShopScreen from './src/ShopScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Tab.Navigator
        
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'question-circle-o' : 'question-circle-o';
              } else if (route.name === 'Ride') {
                iconName = focused ? 'motorcycle' : 'motorcycle';
              }
              else if (route.name === 'Fund') {
                iconName = focused ? 'calculator' : 'calculator';
              }
              else if (route.name === 'Shop') {
                iconName = focused ? 'shopping-cart' : 'shopping-cart';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fe4a49',
            inactiveTintColor: 'gray',
            showLabel: false,
            style:{
              backgroundColor:'#1B1E23',
            }
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fund" component={CalculatorScreen} />
        <Tab.Screen name="Ride" component={RideScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Profile" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}