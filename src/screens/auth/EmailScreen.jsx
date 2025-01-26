import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../components/global/BackButton';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CenteredLogo from '../../components/global/CenteredLogo';
import CustomInput from '../../components/global/CustomInput';
import TouchableText from '../../components/auth/TouchableText';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '../../components/global/CustomButton';

const EmailScreen = () => {
  const [load,setload] = useState(false);
  return (
    <CustomSafeAreaView>
                <BackButton />
                <CenteredLogo/>
                <View style={styles.inputconatiner}>
                  <CustomInput
                  label={'EMAIL ADDRESS'}
                  returnKeyType = {'done'}
                  placeholder = {'Email'}
                  onSubmitEditing = {()=>{
                    console.log('Hit otp');
                  }}

                   />
                   <CustomInput
                  label={'PASSWORD'}
                  returnKeyType = {'done'}
                  placeholder = {'8 to 20 characters'}
                  onSubmitEditing = {()=>{
                    console.log('Hit otp');
                  }}
                  password={true}

                   />
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
                <CustomButton text={'NEXT'}
                 loading={load} disabled={false}
                onPress={()=>{
                  setload(!load);
                }}
                 />

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
