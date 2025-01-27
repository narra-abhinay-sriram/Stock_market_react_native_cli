import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView'
import CenteredLogo from '../../components/global/CenteredLogo'
import CustomInput from '../../components/global/CustomInput'
import OtpTimer from './OtpTimer'
import CustomButton from '../../components/global/CustomButton'

const EmailOtpScreen = ({route}) => {
    const [otp,setOtp] =useState()
    const [otperror,setotpError] = useState()
    const [loading,setloading] = useState()
    const navigation = useNavigation()
    const handleSubmit = async()=>{
        if(!otp)
        {
            setotpError('Wrong OTP ')
        }
            navigation.navigate('SetPasswordScreen',{email:route.params.email})
            setloading(false)

    }
  return (
    <CustomSafeAreaView>
        <ScrollView>
            <CenteredLogo/>
            <TouchableOpacity>
                <View pointerEvents='none'>
               <CustomInput label={'EMAIL ADDRESS'} value={route.params.email} />
                </View>
            </TouchableOpacity>
            <CustomInput
            label={'Enter OTP sent to this EMAIL ID '}
            value={otp}
            onChangeText={(text)=>{
                setOtp(text);
                setotpError('')
            }}
            onSubmitEditing={()=>{
                handleSubmit()
            }}
            error={otperror}
            returnKeyType='done'
            maxLength={6}
            keyboardType='number-pad'
            rightText={<OtpTimer type={'email'} onPress={()=>{}} />}
             />
        </ScrollView>
        <View>
            <CustomButton
            text={'VERIFY EMAIL ID'}
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

export default EmailOtpScreen