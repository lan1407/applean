import {StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../../utils/AppConst';
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    marginTop: 20,
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
  row: {
    flexDirection: 'row',
  },
  text4: {
    color: COLOR.GREEN,
  },
  text5: {
    color: COLOR.GRAY_1,
    marginTop: 5,
  },
  title: {
    left: -70,
  },
  container: {
    height: '30%',
    width: '100%',
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
  bottom: {
    paddingTop: 10,
  },
  text6: {
    flexDirection: 'row',
    marginTop: 30,
  },
});
