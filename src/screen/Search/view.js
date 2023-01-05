import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {firebase} from '../../../config';

function SearchScreenView({name, firebase}) {
  const navigation = useNavigation();

  return (
    <View style={[styles.body]}>
      <View style={styles.header}>
        <Text style={styles.title}>Tìm kiếm</Text>
        <TouchableOpacity style={styles.search}>
          <SVG_NAME.IC_SEARCH />
          <Text style={styles.txtSearch}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentner}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box}>
            <SVG_NAME.IC_SEARCH1 />
            <Text style={STYLE_GLOBAL.body2Bold}>Hoa quả</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box1}>
            <SVG_NAME.IC_SEARCH2 />
            <Text style={STYLE_GLOBAL.body2Bold}>Dầu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box2}>
            <SVG_NAME.IC_SEARCH3 />
            <Text style={STYLE_GLOBAL.body2Bold}>Thịt cá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box3}>
            <SVG_NAME.IC_SEARCH4 />
            <Text style={STYLE_GLOBAL.body2Bold}>Bánh</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box4}>
            <SVG_NAME.IC_SEARCH5 />
            <Text style={STYLE_GLOBAL.body2Bold}>Trứng sữa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box5}>
            <SVG_NAME.IC_SEARCH6 />
            <Text style={STYLE_GLOBAL.body2Bold}>Nước ngọt</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default React.memo(SearchScreenView);
