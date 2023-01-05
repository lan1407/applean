// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import ModalBox from 'react-native-modalbox';
// import {SVG_NAME} from '~/assets/patch';
// import AppButton from '~/components/AppButton';
// import AppText from '~/components/AppText';
// import useI18n from '~/hooks/useI18n';
// import {COLOR, STYLE_GLOBAL, deviceWidth, STATUS_JOIN} from '~/utils/AppConst';

// const styles = StyleSheet.create({
//   viewModal: {
//     borderRadius: 24,
//     backgroundColor: COLOR.WHITE_0,
//     width: deviceWidth - 64,
//     height: 'auto',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   txt: {
//     textAlign: 'center',
//   },
//   btnHeight: {
//     height: 44,
//     width: (deviceWidth - 112) / 2,
//   },
//   btnUpdate: {
//     marginLeft: 16,
//   },
//   button: {
//     width: deviceWidth / 2,
//     height: 44,
//   },
//   flexRow: {
//     flexDirection: 'row',
//   },
//   marginRight16: {
//     marginRight: 16,
//   },
// });

// function ModalUpdateVersion({
//   isOpen,
//   title,
//   onConfirm,
//   onClosed,
//   onSubmit,
//   ...otherProps
// }) {
//   const {t} = useI18n();

//   return (
//     <ModalBox
//       style={styles.viewModal}
//       position="center"
//       isOpen={isOpen}
//       onClosed={onClosed}
//       {...otherProps}>
//       <View style={{padding: 24}}>
//         <View style={{paddingBottom: 24, alignItems: 'center'}}>
//           <SVG_NAME.WARNING_YELLOW />
//           <AppText style={[styles.txt, STYLE_GLOBAL.buttonFont]}>
//             {title}
//           </AppText>
//         </View>
//         <View style={{flexDirection: 'row', marginBottom: -24}}>
//           <AppButton
//             sub
//             title={t('appointment.refuse')}
//             style={[styles.btnHeight]}
//             onPress={onClosed}
//           />
//           <AppButton
//             primary
//             title={t('appointment.accept')}
//             style={[styles.btnHeight, styles.btnUpdate]}
//             onPress={onConfirm}
//           />
//         </View>
//       </View>
//     </ModalBox>
//   );
// }

// export default React.memo(ModalUpdateVersion);
