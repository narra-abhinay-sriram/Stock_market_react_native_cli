import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import CustomText from '../global/CustomText';
import { FONTS } from '../../constants/fonts';
import { Colors } from '../../constants/colors';

const SocialButtonLogin = ({icon,text,onPress}) => {
    const {colors} =  useTheme();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon}
        <CustomText variant={'h8'} fontFamily={FONTS.Medium} style={styles.text}>
            {text}
        </CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        padding:10,
        width:'90%',
        marginVertical:10,
        backgroundColor:Colors.light_background,
        borderWidth:1,
        borderColor:'#DFDFDF',
    },
    text:{
        marginLeft:10,
        color:'black',
    },
});

export default SocialButtonLogin;
