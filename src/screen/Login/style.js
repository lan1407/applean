import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    backgroundColor: COLOR.WHITE_0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
    backgroundColor: COLOR.GREEN,
    width: '100%',
    height: '6%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '100%',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLOR.GRAY_4,
  },
  account: {
    flexDirection: 'row',
  },
  text4: {
    color: COLOR.GREEN,
    marginLeft: 3,
  },
  text5: {
    color: COLOR.GRAY_1,
    marginTop: 5,
  },
  title: {
    left: -70,
  },
  container: {
    height: '20%',
    width: '100%',
    // backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    color: COLOR.GRAY_2,
    fontSize: 20,
  },
  email1: {
    width: '100%',
    height: 40,
  },
  pass: {
    width: '100%',
    height: 40,
    marginTop: 50,
  },
});
