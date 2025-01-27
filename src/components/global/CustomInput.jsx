import { View, Text, useColorScheme, TextInput, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '../../constants/fonts';
import { Colors } from '../../constants/colors';

const CustomInput = ({
    label,
    IconName,
    error,
    rightIcon,
    leftIcon,
    disabled,
    disabledBackground,
    password,
    rightText,
    textTop,
    required,
    containerStyle,
    textInputStyle,
    onFocus = ()=>{},
    ...props
}) => {
    const {colors} = useTheme();
    const [isfocused,setisfocused] = useState(false);
    const [eyeClosed,seteyeClosed] = useState(true);
    const theme = useColorScheme();
  return (
    <View style={[styles.inputMainContainer]}>
        {
            label &&
            (
                <View style={styles.labelContainer}>
                    <Text style={[styles.label,{color:colors.text}]}>
                        {label} {required && '*'}
                    </Text>
                    {
                        rightText
                    }
                </View>
            )
        }

        <View style={[
            styles.inputContainer,
            {
                ...containerStyle,
                borderColor : error ? 'red' : isfocused ? Colors.themeColor : Colors.dark_border,
                borderBottomWidth : error ? 1 : isfocused ? 1 : 0.4,
            },
            ]}>
            {leftIcon}
            <TextInput
            placeholderTextColor={colors.border}
            style={[
                styles.textInput,
                {
                    ...textInputStyle,
                    textAlignVertical : textTop ? 'top' : 'center',
                    color:colors.text,
                
                },
            ]}
            secureTextEntry={password ? eyeClosed : false}
            autoCorrect = {false}
            onFocus={()=>{
                onFocus();
                setisfocused(true);

            }}
            maxLength={256}
            editable={!disabled}
            onBlur={()=>{
                setisfocused(false);
            }}
            {...props}
            />
            {rightIcon}
            {
                password && (
                    <Icon
                    size={RFValue(12)}
                    onPress={()=>{
                        seteyeClosed(!eyeClosed);
                    }}
                    name={eyeClosed ? 'eye-off' : 'eye'}
                    style={styles.password}
                    color={colors.text}
                    />
                )
            }
        </View>
        {
            error && (
                <Text style={styles.errorText}>
                    <Icon2 size={RFValue(13)} name={'information-circle'} />
                    {error}
                </Text>
            )
        }
    </View>

  );
};

const styles = StyleSheet.create({

    inputMainContainer :{
        marginVertical:8,
    },
    errorText :{
        color:'red',
        fontSize: Platform.OS === 'ios' ? RFValue(11) : RFValue(11),
        fontFamily : FONTS.Medium,
        marginBottom : 3,
        flexDirection :'row',
        alignItems:'center',
    },
    label:{
        fontSize :RFValue(9),
        fontFamily :FONTS.Medium,
    },
    labelContainer :{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:2,
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:4,
        justifyContent:'space-between',
    },
    textInput:{
        fontFamily: FONTS.Medium,
        fontSize:RFValue(12),
        alignItems:'flex-start',
        height:28,
        width:'82%',
        paddingVertical:5,
    },
    password :{
       textAlignVertical:'center',
       opacity:0.8,
    },
});

export default CustomInput;
