import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {firebase} from '../../../config';

function FavouriteScreenView({name, firebase}) {
  const navigation = useNavigation();

  const ItemCard = ({title, source, productKilo, productPrice}) => {
    return (
      <TouchableOpacity style={styles.box}>
        <View style={styles.item}>
          <Image source={source} style={styles.image} />
          <View>
            <View>
              <Text style={STYLE_GLOBAL.body2Bold}>{title}</Text>
              <Text style={styles.kilo}>{productKilo}</Text>
            </View>
          </View>
          <View>
            <View style={styles.row}>
              <Text style={STYLE_GLOBAL.body2Bold}>{productPrice}</Text>
              <SVG_NAME.IC_BACKLEFT style={styles.padding} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.body]}>
      <View style={styles.header}>
        <Text style={styles.title}>Yêu thích</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Ot chuong'}
          productKilo={'10kg'}
          productPrice={'$4.99'}
        />
      </ScrollView>
      <View style={styles.boxButom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Giỏ hàng')}
          style={styles.buttom}>
          <Text style={styles.txtButtom}>Thêm giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default React.memo(FavouriteScreenView);
