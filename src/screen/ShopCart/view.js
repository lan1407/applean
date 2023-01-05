import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {firebase} from '../../../config';
import ModalUserConfirm from './ModalUserConfirm';

function CartScreenView({name, firebase}) {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

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
            <View style={styles.row}>
              <TouchableOpacity style={styles.text}>
                <Text style={styles.text1}>-</Text>
              </TouchableOpacity>
              <View style={styles.number}>
                <Text style={STYLE_GLOBAL.body1}>1</Text>
              </View>
              <TouchableOpacity style={styles.text}>
                <Text style={styles.text2}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View>
              <SVG_NAME.IC_CANCEL style={styles.padding} />
              <Text style={STYLE_GLOBAL.body2Bold}>{productPrice}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.body]}>
      <View style={styles.header}>
        <Text style={styles.title}>Tìm kiếm</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <ItemCard
          source={require('../../assets/image/download-4.jpg')}
          title={'Dưa Vàng'}
          productKilo={'1kg'}
          productPrice={'$4.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-1.jpg')}
          title={'Bơ Sáp'}
          productKilo={'10kg'}
          productPrice={'$1.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-2.jpg')}
          title={'Chanh'}
          productKilo={'10kg'}
          productPrice={'$3.99'}
        />
        <ItemCard
          source={require('../../assets/image/download-3.jpg')}
          title={'Chanh Vàng'}
          productKilo={'5kg'}
          productPrice={'$4.00'}
        />
        <ItemCard
          source={require('../../assets/image/download-1.jpg')}
          title={'Bơ Sáp'}
          productKilo={'10kg'}
          productPrice={'$1.99'}
        />
        <View style={styles.marginBottom} />
      </ScrollView>
      <View style={styles.boxButom}>
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.txtButtom}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default React.memo(CartScreenView);
