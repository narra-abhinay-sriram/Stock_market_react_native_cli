import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FONTS } from '../../constants/fonts';
import { useTheme } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const CustomText = ({
    variant = 'body',
    fontFamily = FONTS.Regular,
    fontSize,
    style,
    children,
    numberOfLines,
}) =>{

    const {colors} = useTheme();
   // console.log(colors);
    let computedFontSize;
    switch(variant)
    {
        case 'h1':
            computedFontSize = RFValue(fontSize || 22);
            break;
         case 'h2':
                computedFontSize = RFValue(fontSize || 20);
                break;
                case 'h3':
                    computedFontSize = RFValue(fontSize || 18);
                    break;
                    case 'h4':
                        computedFontSize = RFValue(fontSize || 16);
                        break;
                        case 'h5':
                            computedFontSize = RFValue(fontSize || 14);
                            break;
                            case 'h6':
                                computedFontSize = RFValue(fontSize || 12);
                                break;
                                case 'h7':
                                    computedFontSize = RFValue(fontSize || 10);
                                    break;
                                    case 'h8':
                                        computedFontSize = RFValue(fontSize || 9);
                                        break;
                                        case 'h9':
                                            computedFontSize = RFValue(fontSize || 8);
                                            break;
                                            default:
                                                computedFontSize = RFValue(fontSize || 12);
    }
    const fontFamilyStyle = {
        fontFamily :
        fontFamily === FONTS.Black ? 'Roboto-Black'
        : fontFamily === FONTS.Bold ? 'Roboto-Bold'
        : fontFamily === FONTS.Light ? 'Roboto-Light'
        : fontFamily === FONTS.Medium ? 'Roboto-Medium'
        : fontFamily === FONTS.Thin ? 'Roboto-Thin'
        : 'Roboto-Regular',
    };
  //  console.log(colors.text);
    return (
        <Text
        style={[
            styles.text,
            {
                color : colors.text,
                fontSize :computedFontSize,
            },
            fontFamilyStyle,
            style,
        ]}
        numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
        >
            {children}
        </Text>

    );
};
const styles = StyleSheet.create({
    text: {
        textAlign:'left',
    },
});

export default CustomText;
