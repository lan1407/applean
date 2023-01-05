import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    backgroundColor: COLOR.WHITE_0,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
  },
  marginBottom: {
    marginBottom: 50,
  },
  scroll: {
    top: 40,
    paddingHorizontal: 20,
  },
  header: {
    top: 40,
    paddingVertical: 20,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.WHITE_5,
  },
  box: {
    height: 150,
    borderBottomWidth: 1,
    borderColor: COLOR.WHITE_5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    top: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    right: 10,
  },
  kilo: {
    color: COLOR.GRAY_2,
  },
  text1: {
    fontSize: 35,
    color: COLOR.GRAY_3,
  },
  text2: {
    fontSize: 35,
    color: COLOR.GREEN,
  },
  text: {
    height: 50,
    width: 50,
    borderRadius: 15,
    borderColor: COLOR.WHITE_5,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  padding: {
    marginBottom: 40,
    marginLeft: 30,
  },
  buttom: {
    backgroundColor: COLOR.GREEN,
    marginHorizontal: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  txtButtom: {
    color: COLOR.WHITE_0,
    fontSize: 20,
    fontWeight: '700',
  },
  boxButom: {
    paddingVertical: 10,
    backgroundColor: COLOR.WHITE_0,
  },
});
