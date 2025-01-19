import { Dimensions, PixelRatio } from 'react-native';
import { moderateScale ,scale,verticalScale } from 'react-native-size-matters';
import { widthPercentageToDP,heightPercentageToDP } from 'react-native-responsive-screen';

export const normalizeModerately = (size,factor = 0.5)=>{
return PixelRatio.roundToNearestPixel(moderateScale(size,factor));
};
export const normalizeWidth = (size)=>{
return PixelRatio.roundToNearestPixel(scale(size));
};
export const normalizeHeight = (size)=>{
    return PixelRatio.roundToNearestPixel(verticalScale(size));
};
export const widthPercentage = (size)=>{
    return widthPercentageToDP(size);

};
export const heightPercentage = (size)=>{
    return heightPercentageToDP(size);
};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
