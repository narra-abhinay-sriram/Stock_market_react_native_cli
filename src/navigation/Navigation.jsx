import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { useCustomTheme } from './Theme';
import LoginScreen from '../screens/LoginScreen';
const Stack = createNativeStackNavigator();



const Navigation = () => {
  const theme = useCustomTheme();
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


