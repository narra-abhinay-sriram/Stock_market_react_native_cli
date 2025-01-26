import { View,  StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const BackButton = () => {
    const {colors} =  useTheme();
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.goBack()}>
        <Icon name="arrow-back" color={colors.text} size={RFValue(20)} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingVertical:5,
        marginVertical:5,
    },
});

export default BackButton;
