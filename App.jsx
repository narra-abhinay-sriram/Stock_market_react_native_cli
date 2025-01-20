import React from 'react';
import Navigation from './src/navigation/Navigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '330239980465-pjv9ccccu6knbi71a857e06klenourc0.apps.googleusercontent.com', // get this from your firebase web config
});

const App = () => {
  return (
    <Navigation/>
  );
};

export default App;
