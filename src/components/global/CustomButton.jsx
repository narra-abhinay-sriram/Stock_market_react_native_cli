import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomText from './CustomText';
import { FONTS } from '../../constants/fonts';
import { useTheme } from '@react-navigation/native';

const CustomButton = ({text,loading,disabled,onPress}) => {
    const {colors} = useTheme();
    const [animatedValue,setAnimatedValue] = useState(new Animated.Value(0));
    useEffect(()=>{
        if(loading)
        {
            Animated.loop(
                Animated.timing(animatedValue,{
                    toValue:1,
                    duration:1500,
                    useNativeDriver:true,

                })
        ).start();
        } else{
            animatedValue.stopAnimation();
        }
    },[loading,animatedValue]);
  return (
   <TouchableOpacity
   disabled={ disabled}
   style={[styles.button,{backgroundColor: loading || disabled ? colors.card : colors.primary}]}
   onPress={onPress}
   >
    <CustomText fontFamily={FONTS.Medium} variant={'h4'}>{text}</CustomText>
    {
        loading &&
        (
            <Animated.View
            style={[
                styles.loadingIndicators,
                {
                    transform: [
                        {
                            translateX : animatedValue.interpolate({
                                inputRange:[0,1] ,
                                outputRange:[-40,100],
                            }),
                        },
                    ],
                },
            ]} />
        )
    }
   </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    button:{
        padding:4,
        width:'100%',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        overflow:'hidden',
    },
    loadingIndicators:{
        position:'absolute',
        bottom:0,
        left:0,
        height:2,
        backgroundColor:'red',
        width:'100%',
    },
});
export default CustomButton;
