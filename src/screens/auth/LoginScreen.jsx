import { View, Text, SafeAreaView, StyleSheet, Image, useColorScheme } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import { FONTS } from '../../constants/fonts';
import { normalizeModerately, screenWidth } from '../../utils/Scaling';
import LoginImageDark from '../../assets/images/login_dark_animation.png';
import LoginImageLight from '../../assets/images/login_animation_light.png';
import SocialButtonLogin from '../../components/auth/SocialButtonLogin';
import Icon from 'react-native-vector-icons/Ionicons';
import Googleicon from '../../assets/images/google.png';
import TouchableText from '../../components/auth/TouchableText';
import BottomText from '../../components/auth/BottomText';
import { SigninWithGoogle } from '../../redux/SocialLogin';


const LoginScreen = () => {
  const theme = useColorScheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
       <CustomText variant={'h1'} fontFamily={FONTS.Medium}>Together we Groww</CustomText>
       <CustomText variant={'h4'} style={styles.subText}>Invest • Pay • Loans</CustomText>


      <View style={styles.imagecontainer}>
        <Image
        style={styles.img}
        source={theme === 'dark' ? LoginImageDark : LoginImageLight}

         />
      </View>

      <SocialButtonLogin
       icon={<Image source={Googleicon} style={{ width : 20, height : 20}} />}
       text={'Continue with Google'}
       onPress={()=>{SigninWithGoogle();}}
       />
       <SocialButtonLogin
       icon={<Icon name={'logo-apple'} size={18} color={'black'} />}
       text={'Continue with Apple'}
       onPress={()=>{}}
       />
       <TouchableText
       firstText={'Use other email ID'}
       onPress={()=>{}}
       style={{marginVertical:30,marginTop:20}}
       />
       <BottomText />


      </View>


    </CustomSafeAreaView>
  );
};
const styles = StyleSheet.create({
container :{
  justifyContent:'center',
  alignItems:'center',
  paddingTop:20,
},
subText:{
  marginTop:10,
  opacity :0.6,
},
imagecontainer:{
  width:screenWidth,
  height:screenWidth ,
  marginVertical:normalizeModerately(30),
},
img:{
  width:'100%',
  height:screenWidth,
  resizeMode:'contain',
},

});

export default LoginScreen;
