import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

type ProductProps = {
    imageSource: any,
    productPrice: string
}

const ProductList: React.FC<ProductProps> = ({ imageSource, productPrice }) => {
    return (

        <View style={styles.productCard}>
            {/* image View */}
            <View>
                <Image source={imageSource} style={styles.productImage} />
            </View>

            {/* Text and icon view */}
            <View style={styles.productTextView}>
                <Feather name="heart" size={22} color="black" />
                <Text style={styles.productPrice}>{productPrice}</Text>
                <Feather name="shopping-cart" size={22} color="black" />
            </View>
        </View>

    )
}

export default ProductList

const styles = StyleSheet.create({

    productCard: { height: 220, width: 270, borderRadius: 8, backgroundColor: '#E3F8FF', justifyContent: 'center', alignItems: 'center',gap:10 },

    productImage: { width: 175, height: 165, },

    productTextView: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap:50,marginBottom:15},

    productPrice: {fontSize:17,fontWeight:'700',textAlign:'center',textAlignVertical:'center'}

})