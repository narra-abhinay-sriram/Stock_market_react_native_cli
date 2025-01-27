import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { validatePasswordLength } from '../../utils/Validate';
import { useNavigation } from '@react-navigation/native';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CenteredLogo from '../../components/global/CenteredLogo';
import CustomInput from '../../components/global/CustomInput';
import GuideLineText from '../../components/global/GuideLineText';
import CustomButton from '../../components/global/CustomButton';
import { GlobalStyles } from '../../utils/Globalstyles';
import { RFValue } from 'react-native-responsive-fontsize';

const SetPasswordScreen = ({route}) => {
    const [password,setpassword] = useState('');
    const [passwordError,setPasswordError]=useState('');
    const [loading,setloading]=useState(false);
    const navigation = useNavigation()
    const validate =()=>{
        if(!validatePasswordLength(password))
        {
          setPasswordError('Enter valid password')
          return false;
        }
        return true;
    }
    const handleSubmit =async()=>{
              if(validate())
              {
                     navigation.navigate('PhoneScreen')
              }
    }
  return (
   <CustomSafeAreaView>
    <ScrollView>
      <CenteredLogo/>
      <TouchableOpacity>
        <View pointerEvents='none'>
          <CustomInput
          label={'EMAIL ADDRESS'}
          value ={route.params.email}
          />
        </View>
      </TouchableOpacity>
      <CustomInput
      label={'SET PASSWORD'}
      returnKeyType='done'
      value={password}
      autoFocus={true}
      error={passwordError}
      onChangeText={(text)=>{
        setpassword(text)
        setPasswordError('')
      }}
      onSubmitEditing={handleSubmit}
      password
       />
    </ScrollView>
    <View >
      <GuideLineText text={['Password must have atleast one uppercase and lowercase',
        'Must contain atleast one number and special character',
        'Must not contain user first/last name & email id']} />
        <CustomButton 
        text='NEXT'
        loading={loading}
        disabled={loading}
        onPress={()=>{
          handleSubmit();
        }}
        />
    </View>
   </CustomSafeAreaView>
  )
}
const styles =StyleSheet.create({
  text:{
    fontSize:RFValue(10),
    marginTop:5,
    alignSelf:'flex-end'
  }
})

export default SetPasswordScreen