import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    backgroundColor: COLOR.WHITE_0,
    height: '100%',
    width: '100%',
  },
  header: {
    // backgroundColor: 'red',
    top: 40,
    height: 140,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.WHITE_5,
  },
  header1: {
    marginLeft: 20,
  },
  email: {
    color: COLOR.GRAY_5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: COLOR.WHITE_5,
  },
  title: {
    top: 40,
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 20,
    fontWeight: '700',
    paddingRight: 10,
  },
  button: {
    backgroundColor: 'red',
  },
});
