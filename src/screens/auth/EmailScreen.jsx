import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../components/global/BackButton';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CenteredLogo from '../../components/global/CenteredLogo';
import CustomInput from '../../components/global/CustomInput';
import TouchableText from '../../components/auth/TouchableText';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '../../components/global/CustomButton';
import { validateEmail } from '../../utils/Validate';
import { useNavigation } from '@react-navigation/native';

const EmailScreen = () => {
  const [load,setload] = useState(false);
  const [email,setemail] = useState('');
  const [emailerror,setemailerror] = useState('');
 const navigation = useNavigation()
 
  const validate = ()=>{
if(!validateEmail(email))
{
  setemailerror('please enter valid email address');
  return false;
}
return true;
  };


  const handleSubmit = async()=>{
                setload(true);
      if(validate()){
         navigation.navigate('EmailOtpScreen',{email:email})
                  }
           setload(false);
      };

  return (
    <CustomSafeAreaView>
                <BackButton />
                <ScrollView>
                <CenteredLogo/>
                <CustomInput
                  label={'EMAIL ADDRESS'}
                  enterKeyHint = {'done'}
                  value={email}
                  inputMode={'email'}
                  focusable={true}
                  autoFocus={true}
                  error={emailerror}
                  placeholder = {'Email'}
                  onEndEditing={()=>validate()}
                  onChangeText={(text)=>{
                    setemail(text);
                    setemailerror('');
                  }}
                  onSubmitEditing = {handleSubmit}

                   />
                </ScrollView>
                <View>
                <CustomButton text={'NEXT'}
                 loading={load}
                  disabled={false}
                onPress={()=>{
                  setload(!load);
                  handleSubmit();
                }}
                 />
                </View>

    </CustomSafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputconatiner:{
    marginTop:40,
    paddingHorizontal:3,
  },
});
export default EmailScreen;
/* <CustomInput
                  label={'PASSWORD'}
                  returnKeyType = {'done'}
                  placeholder = {'8 to 20 characters'}
                  onSubmitEditing = {()=>{
                    console.log('Hit otp');
                  }}
                  password={true}

                   />
 <View style={styles.inputconatiner}>
                   <CustomInput
                  label={'ENTER OTP SEND TO THIS MAIL ID'}
                  returnKeyType = {'done'}
                  placeholder = {'enter OTP'}
                  onSubmitEditing = {()=>{
                    console.log('Hit otp');
                  }}
                    keyboardType={'number-pad'}
                    rightText={<TouchableText onPress={()=>{}} firstText={'Resend in 25s'} style={{fontSize:RFValue(9)}}/>}
                   />
                </View>

 */
