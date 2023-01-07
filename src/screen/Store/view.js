import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from './style';
import {SVG_NAME} from '../../assets/patch';
import {useNavigation} from '@react-navigation/native';
import {COLOR, STYLE_GLOBAL} from '../../utils/AppConst';
import {firebase} from '../../../config';
import {Item} from '../../assets/Database';

const StoreScreenView = ({}) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  console.log('navigation', navigation);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFormDB();
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFormDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Item.length; index++) {
      if (Item[index].category == 'fruits') {
        productList.push(Item[index]);
      } else if (Item[index].category == 'thit') {
        accessoryList.push(Item[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  const ProductCard = ({data, onPress}) => {
    console.log('data dsadsadsa dsadas', data.id);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', data)}
        // onPress={onPress}
        style={styles.box}>
        <View style={styles.item}>
          {data.isOff ? (
            <View>
              <Text>{data.offPercentage}</Text>
            </View>
          ) : null}
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductInfo', {productID: data.id})
            }></TouchableOpacity> */}
          <Image source={data.productImage} style={styles.image} />
          <View style={styles.padding}>
            <View style={styles.itemName}>
              <Text style={STYLE_GLOBAL.body1Semi}>{data.productName}</Text>
            </View>
            <Text style={styles.kilo}>{data.productKilo}</Text>
            {data.category == 'thit' ? null : null}
            <View style={styles.row}>
              <Text style={STYLE_GLOBAL.body2Bold}>{data.productPrice}</Text>
              <View>
                <TouchableOpacity>
                  <SVG_NAME.IC_ADD />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.body]}>
      <View style={styles.header}>
        <SVG_NAME.IC_LOGO1 style={styles.youfood} />
        <Text style={STYLE_GLOBAL.body1Semi}>Youfood</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tìm kiếm')}
          style={styles.search}>
          <SVG_NAME.IC_SEARCH />
          <Text style={styles.txtSearch}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.body1}>
        <SVG_NAME.IC_BANNER style={styles.banner} />
        <View style={styles.title}>
          <View style={styles.row}>
            <Text style={STYLE_GLOBAL.body1Bold}>Độc quyền</Text>
            <TouchableOpacity>
              <Text style={styles.all}>Tất cả</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {products.map(data => {
                return (
                  <ProductCard
                    // onPress={() =>
                    //   navigation.navigate('ProductInfo', {params: 'kasxjk'})
                    // }
                    data={data}
                    key={data.id}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View style={styles.title}>
          <View style={styles.row}>
            <Text style={STYLE_GLOBAL.body1Bold}>Mới nhất</Text>
            <TouchableOpacity>
              <Text style={styles.all}>Tất cả</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {products.map(data => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </ScrollView>
          </View>
        </View>
        <View style={styles.title}>
          <View style={styles.row}>
            <Text style={STYLE_GLOBAL.body1Bold}>Thịnh hành</Text>
            <TouchableOpacity>
              <Text style={styles.all}>Tất cả</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {products.map(data => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </ScrollView>
          </View>
        </View>
        <View style={styles.title}>
          <View style={styles.row}>
            <Text style={STYLE_GLOBAL.body1Bold}>Hoa quả</Text>
            <TouchableOpacity>
              <Text style={styles.all}>Tất cả</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {accessory.map(data => {
                return <ProductCard data={data} key={data.id} />;
              })}
            </ScrollView>
          </View>
        </View>
        <View style={styles.padding100} />
      </ScrollView>
    </View>
  );
};
export default StoreScreenView;
