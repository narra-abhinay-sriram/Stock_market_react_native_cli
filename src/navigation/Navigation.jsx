import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/dashboard/HomeScreen';
import { useCustomTheme } from './Theme';
import LoginScreen from '../screens/auth/LoginScreen';
import EmailScreen from '../screens/auth/EmailScreen';
import EmailOtpScreen from '../screens/auth/EmailOtpScreen';
const Stack = createNativeStackNavigator();



const Navigation = () => {
  const theme = useCustomTheme();
  //console.log('theme',theme);
  const Mytheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
      card: theme.colors.card,
      border: theme.colors.border,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
    },
  };
  return (
    <NavigationContainer theme={Mytheme}>
      <Stack.Navigator
      initialRouteName="LoginScreen"
        screenOptions={()=>({
          headerShown:false,
        })}
      >
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'EmailScreen'} component={EmailScreen} />
        <Stack.Screen name='EmailOtpScreen' component={EmailOtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


