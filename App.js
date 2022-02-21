import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens //
import SignInScreen from './landing/SignIn';
import ProfileScreen from './landing/Profile';
import VProfileScreen from './landing/VProfile';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}  
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
                <Stack.Screen name="VProfile" options={{ headerShown: false }} component={VProfileScreen} />
              </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});
export default MyStack;