import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile';
import UserProfile from './UserProfile';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
