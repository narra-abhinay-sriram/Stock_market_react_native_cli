import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../constants/colors';
import CustomText from './CustomText';
import { FONTS } from '../../constants/fonts';

const GuideLineText = ({text}) => {
  const theme = useColorScheme();
  const {colors} = useTheme();
  return (
    <View style={[styles.Container,{backgroundColor:theme=='dark'?'#46391D':'#FFF5E0'}]}>
      <Icon 
      name='information-circle'
      size={RFValue(16)}
      style={[styles.text,{color:Colors.text}]}
      />
      <View style={styles.textconatiner}>
        {
          text?.map((text,index)=>{
            return (
              <CustomText key={index} fontFamily={FONTS.Regular} style={styles.text} variant='h9' >
                {
                  text
                }

              </CustomText>
            )
          })
        }
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  Container:{
    flexDirection:'row',
    alignItems:'center',
  },
  textconatiner:{
    padding:15,
    },
    text:{
      fontFamily:FONTS.Medium,
      fontSize:10
    }
})
export default GuideLineText