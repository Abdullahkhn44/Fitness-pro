import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'

import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import centralProduct from '../app/data/centralProduct';


// type TopProductProps = {
//     productName: string,
//     productPrice: string,
//     imageSource: any
// }

const TopProducts = () => {

    const router = useRouter();

    const renderItem = ({ item }) => {


        const handlePress = () => {

            router.push({
                pathname: '/productDetail',

                params: {
                    productId: item.id
                }
            })
        }


        return (

            < View style={styles.cardView} >

                <View style={styles.iconStyle}>  <Feather name="arrow-up-right" size={24} color="white" /></View>
                {/* Image View */}

                < View style={styles.imageView} >

                    <TouchableOpacity onPress={handlePress}>
                        <Image source={item.imageSource} style={styles.cardImage} />
                    </TouchableOpacity>
                </View >

                {/* Text View */}
                < View style={styles.textView} >

                    <Text style={styles.cardText}>{item.productName}</Text>
                    <Text style={styles.cardPrice}>{item.productPrice}</Text>
                </View >

            </View >



        )
    }

    return (

        <FlatList
            data={centralProduct}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            numColumns={2}
        />



    )
}

export default TopProducts

const styles = StyleSheet.create({

    cardView: { width: '48%', height: 'auto', backgroundColor: '#5AB3F2', borderRadius: 10, top: 20, justifyContent: 'center', alignItems: 'center', gap: 22, marginBottom: 28, margin:4 },

    imageView: {},

    cardImage: { width: 160, height: 150, },

    textView: { width: 162, gap: 8, height: 92.5, backgroundColor: '#111827', borderRadius: 10, },

    cardText: { color: 'white', fontSize: 16, fontWeight: '400', margin: 5 },

    cardPrice: { color: 'white', fontSize: 15, fontWeight: '400', margin: 5 },

    iconStyle: { position: 'absolute', left: 135, bottom: 230 }


})