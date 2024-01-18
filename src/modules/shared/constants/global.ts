import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Dimensions, Platform } from 'react-native';

export const windowDimension = Dimensions.get('window');
export const screenDimension = Dimensions.get('screen');

export const BLURHASH =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
export const IS_TABLET = windowDimension.width >= 768;
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const IS_WEB = Platform.OS === 'web';
export const IS_EXPO = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;
