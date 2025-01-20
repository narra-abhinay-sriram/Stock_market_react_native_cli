import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Alert } from 'react-native';
GoogleSignin.configure({
  webClientId: '330239980465-pjv9ccccu6knbi71a857e06klenourc0.apps.googleusercontent.com', // get this from your firebase web config
  offlineAccess: true,

});

export const SigninWithGoogle = async () => {
    try {
      await GoogleSignin.signOut();

        await GoogleSignin.hasPlayServices();
        const user = await GoogleSignin.signIn();
        Alert.alert('Success', 'Signed in successfully');
        console.log(user.data.idToken);
      } catch (error) {
        console.error('Google Sign-In Error:', error);
        throw error;
        }

  };

