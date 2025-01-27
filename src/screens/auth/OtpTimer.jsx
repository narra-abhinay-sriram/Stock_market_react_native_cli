import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS } from '../../constants/fonts'
import { Colors } from '../../constants/colors'

const OtpTimer = ({type,onPress,style}) => {
    const [timer,setTimer] =  useState(30)
    useEffect(()=>{
        let intervalId;
        if(timer>0)
        {
            intervalId=setInterval(() => {
                setTimer((prevTimer)=>prevTimer-1);
                
            }, 1000);
        }
        return ()=> clearInterval(intervalId);
    },[timer])
    const handleResend=()=>{
        setTimer(30);
        onPress();
    }
  return (
    <TouchableOpacity
    onPress={timer==0 ? handleResend : undefined}
    disabled={timer!=0}
    >
        <Text style={[styles.text,{color:Colors.themeColor},style]}>
            {timer==0 ? 'RESEND OTP' : `RESEND IN ${timer}`}
        </Text>
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    text:{
        fontFamily:FONTS.Medium,
        fontSize:RFValue(9)
    }
})

export default OtpTimer