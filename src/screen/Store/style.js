import {StyleSheet} from 'react-native';
import {COLOR} from '../../utils/AppConst';

export default StyleSheet.create({
  body: {
    backgroundColor: COLOR.WHITE_0,
    height: '100%',
    width: '100%',
  },
  header: {
    top: 40,
    // backgroundColor: COLOR.BLUE,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  body1: {
    top: 40,
    paddingHorizontal: 16,
    // backgroundColor: 'red',
  },
  youfood: {
    marginLeft: 20,
    marginBottom: 10,
  },
  banner: {
    marginBottom: 10,
    right: 6,
  },
  txtSearch: {
    color: COLOR.GRAY_2,
    paddingLeft: 5,
    marginTop: 5,
  },
  all: {
    color: COLOR.GREEN,
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
    height: '20%',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 50,
  },
  item: {
    width: '100%',
    height: '90%',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLOR.GRAY_4,
  },
  box: {
    width: 160,
    height: 250,
    marginTop: 20,
    position: 'relative',
    flex: 1,
    marginRight: 10,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image1: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  itemName: {
    paddingBottom: 10,
  },
  kilo: {
    color: COLOR.GRAY_2,
    paddingBottom: 0,
  },
  padding: {
    padding: 15,
  },
  padding100: {
    paddingBottom: 50,
  },
  search: {
    backgroundColor: COLOR.WHITE_5,
    width: '95%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginVertical: 20,
  },
});
