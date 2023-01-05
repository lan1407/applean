import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {STYLE_GLOBAL} from '../../utils/AppConst';
import {Item} from '../../assets/Database';

const ProductInfoScreenView = ({route}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.body]}>
      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <SVG_NAME.IC_BACK />
        </TouchableOpacity>
        <Image
          source={require('../../assets/image/download-4.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.body1}>
        <View>
          <Text style={STYLE_GLOBAL.h2}>
            Táo{/* {productID.productName} */}
          </Text>
          <Text style={styles.kilo}>1kg</Text>
        </View>
        <View style={styles.contentner}>
          <View style={styles.row1}>
            <View style={styles.row}>
              <TouchableOpacity>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              <View style={styles.number}>
                <Text style={STYLE_GLOBAL.body1}>5</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={STYLE_GLOBAL.body1Bold}>$4.99</Text>
          </View>
          <View style={styles.row1}>
            <View style={styles.row}>
              <Text style={STYLE_GLOBAL.body2Bold}>Khối lượng</Text>
            </View>
            <View style={styles.kilogam}>
              <Text>$4.99</Text>
            </View>
          </View>
          <View style={styles.row1}>
            <View style={styles.row}>
              <Text style={STYLE_GLOBAL.body2Bold}>Đánh giá</Text>
            </View>
            <View>
              <SVG_NAME.IC_STAR />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Giỏ hàng')}
            style={styles.buttom}>
            <Text style={styles.buttomText}>Thêm giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProductInfoScreenView;
