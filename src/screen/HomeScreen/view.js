import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';

function HomeScreenView({name, firebase}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.body]}>
      <View style={styles.header}>
        <SVG_NAME.IC_AVATAR />
        <View style={styles.header1}>
          <Text style={STYLE_GLOBAL.body1Bold}>
            {name.firstName} {name.lastName}
          </Text>
          <Text style={styles.email}>{name.email}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Giỏ hàng')}
          style={styles.item}>
          <View style={styles.row}>
            <SVG_NAME.IC_CART />
            <Text style={styles.txt}>Giỏ hàng</Text>
            <SVG_NAME.IC_BACKLEFT />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.row}>
            <SVG_NAME.IC_PROFILE />
            <Text style={styles.txt}>Chi tiết cá nhân</Text>
            <SVG_NAME.IC_BACKLEFT />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.row}>
            <SVG_NAME.IC_ADDRESS />
            <Text style={styles.txt}>Đơn hàng vận chuyển</Text>
            <SVG_NAME.IC_BACKLEFT />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.row}>
            <SVG_NAME.IC_HISTORY />
            <Text style={styles.txt}>Lịch sử thanh toán</Text>
            <SVG_NAME.IC_BACKLEFT />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <View style={styles.row}>
            <SVG_NAME.IC_HELP />
            <Text style={styles.txt}>Trợ giúp</Text>
            <SVG_NAME.IC_BACKLEFT />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
          }}
          style={[styles.button]}>
          <Text style={[styles.text3]}>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default React.memo(HomeScreenView);
