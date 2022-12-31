import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    top: '55%',
  },
  background: {
    height: '100%',
    width: '100%',
  },
  text: {
    paddingTop: 10,
    color: COLOR.WHITE_0,
    textAlign: 'center',
    paddingHorizontal: 29,
  },
  text1: {
    paddingTop: 25,
    color: COLOR.WHITE_0,
    paddingBottom: 55,
  },
  text3: {
    color: COLOR.WHITE_0,
    fontSize: 20,
  },
  button: {
    backgroundColor: COLOR.GREEN,
    width: '100%',
    height: '6%',
    borderRadius: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
