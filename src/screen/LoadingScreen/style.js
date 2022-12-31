import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    backgroundColor: COLOR.WHITE_0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  text: {
    paddingTop: 10,
    color: COLOR.BLACK_0,
    fontSize: 30,
    textAlign: 'center',
  },
  text1: {
    paddingTop: 10,
    fontSize: 15,
  },
  text3: {
    color: COLOR.WHITE_0,
    fontSize: 20,
  },
  button: {
    backgroundColor: COLOR.BLUE_6,
    width: '100%',
    height: '6%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
