import { Dimensions } from 'react-native';

export const windowDimension = Dimensions.get('window');
export const screenDimension = Dimensions.get('screen');
export const isTablet = windowDimension.width >= 768;
