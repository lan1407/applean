import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    backgroundColor: COLOR.WHITE_0,
    height: '100%',
    width: '100%',
  },
  body1: {
    top: 40,
    paddingHorizontal: 16,
  },
  header: {
    zIndex: 4,
    left: 0,
    right: 0,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.WHITE_5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentner: {
    paddingTop: 10,
  },
  back: {
    left: -170,
    zIndex: 10,
    top: 50,
    padding: 15,
    // position: 'relative',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    // position: 'absolute',
  },
  text: {
    fontSize: 50,
    color: COLOR.GRAY_3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: COLOR.WHITE_5,
    paddingBottom: 10,
  },
  number: {
    height: 50,
    width: 50,
    borderRadius: 15,
    borderColor: COLOR.WHITE_5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  kilo: {
    color: COLOR.GRAY_1,
  },
  kilogam: {
    backgroundColor: COLOR.WHITE_5,
    height: 30,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  buttom: {
    marginTop: 15,
    backgroundColor: COLOR.GREEN,
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttomText: {
    color: COLOR.WHITE_0,
    fontSize: 20,
    fontWeight: '700',
  },
});
