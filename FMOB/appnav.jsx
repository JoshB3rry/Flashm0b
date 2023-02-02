import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home.jsx';
import Concert from './concert.jsx';
import Profile from './Profile';
import UserProfile from './UserProfile';


const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Concert" component={Concert} />
    <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ title: 'User Profile' }}
      />
  </Stack.Navigator>
);



export default AppNavigator;

