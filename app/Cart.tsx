import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'
import { getProductById } from './data/centralProduct';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useAppSelector } from './hooks';

const Cart = () => {



  const { productId } = useLocalSearchParams()

  const product = getProductById(productId)

  const cart = useAppSelector((state) => state.cart.value)


  return (

    <LinearGradient style={styles.container} colors={['rgba(90,179,242)', '#030712']}
      start={{ x: -0.7, y: 0.1 }} end={{ x: 0, y: 0.55 }}
    >

      <View style={styles.headerView}>
        <Text style={styles.headerText}>Cart</Text>
      </View>

      {cart.length === 0 ? (

        <View style={styles.emptyBasketView}>

          <Image style={styles.emptyBasketImage} source={require('../assets/images/empty_basket2.png')} />
          <Text style={styles.emptyBasketText}>Ugh! your cart is empty right now.</Text>
          <Text style={styles.emptyBasketText2}>Add some love to your cart!</Text>

          <View style={styles.emptyBasketButtonView}>
            <TouchableOpacity style={styles.emptyBasketButton}><Text style={styles.emptyBasketButtonText}>Start Shopping</Text></TouchableOpacity>
          </View>
        </View>

      ) : (

        cart.map((item) => (

          <View style={styles.productContainer}>

            <View style={styles.productImageView}>
              <Image source={item.imageSource} style={styles.watchImage} />
            </View>

            <View style={styles.productTextView}>
              <Text style={styles.productText}>{item.productName}</Text>
              <Text style={styles.productTextPrice}>{item.productPrice}</Text>


            </View>



            <View style={styles.counterPriceViewOuter}>

              <View style={styles.counterPriceViewInner}>
                <AntDesign name="minus-circle" size={18} color="white" />

                <Text style={styles.countText}> 1 </Text>

                <AntDesign name="plus-circle" size={18} color="white" />
              </View>

              <Text style={styles.productRemoveText}>Remove</Text>
            </View>





          </View>
        ))

      )}




    </LinearGradient>
  )
}

export default Cart

const styles = StyleSheet.create({

  container: {
    flex: 1, alignItems: 'center', backgroundColor: '#030712', paddingHorizontal: 0
  },

  headerView: {
    alignItems: 'flex-start', width: '100%', backgroundColor: "#030712", position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 75,
    paddingHorizontal: 12,
    justifyContent: 'center',

    zIndex: 10,
  },

  headerText: { color: 'white', fontSize: 25, fontWeight: 'bold' },

  productContainer: { width: '100%', height: '15%', top: 105, borderBottomWidth: 1, borderColor: 'grey', paddingHorizontal: 14, },

  productImageView: { right: 20, width: '30%', height: 'auto', },

  productTextView: { flexDirection: 'row', justifyContent: 'flex-end', gap: 90, bottom: 80, },

  watchImage: { height: 110, width: 110, filter: [{ brightness: 1.5 }], },

  productText: { color: 'white', fontSize: 15, fontWeight: '700', },

  productTextPrice: { color: 'white', fontSize: 15, fontWeight: '600', },


  counterPriceViewOuter: { flexDirection: 'row', justifyContent: 'flex-end', bottom: 50, gap: 90 },

  counterPriceViewInner: { flexDirection: 'row', },

  countText: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: 8,
    fontWeight: '600',
  },

  removeView: {},
  productRemoveText: { color: 'white', fontSize: 15, fontWeight: '700', },

  // STYLE IF NO PRODUCT INSIDE THE CART

  emptyBasketView: { flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 10, },

  emptyBasketImage: { height: 300, width: 300, },

  emptyBasketText: { fontSize: 20, fontWeight: '600', color: 'white' },
  emptyBasketText2: { fontSize: 16, fontWeight: '300', color: 'white' },

  emptyBasketButtonView: { top: 80, justifyContent: 'flex-end', alignItems: 'center', textAlign: 'center', },

  emptyBasketButton: { width: 300, height: 50, backgroundColor: '#5AB3F2', borderRadius: 8, textAlign: 'center', justifyContent: 'center', alignItems: 'center', },

  emptyBasketButtonText: { fontSize: 17, fontWeight: 'bold', color: 'white' }

})