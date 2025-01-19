import {  Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { FONTS } from '../../constants/fonts';
import { RFPercentage } from 'react-native-responsive-fontsize';

const TouchableText = ({firstText,style,onPress}) => {
    const {colors} =  useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={[styles.bottomText,{color:colors.primary},style]}>
            {firstText}
        </Text>

    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    bottomText:{
        fontFamily:FONTS.Medium,
        fontSize:RFPercentage(1.5),
        marginTop:5,
    },
});

export default TouchableText;
