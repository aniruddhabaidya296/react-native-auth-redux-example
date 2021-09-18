import {Dimensions} from 'react-native';

export const SizeConfig = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  blockWidth: Dimensions.get('window').width / 100,
  blockHeight: Dimensions.get('window').height / 100,
};
