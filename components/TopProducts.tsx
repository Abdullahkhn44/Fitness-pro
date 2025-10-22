import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Feather from '@expo/vector-icons/Feather';


type TopProductProps = {
    productName: string,
    productPrice: string,
    imageSource: any
}

const TopProducts: React.FC<TopProductProps> = ({ productName, productPrice, imageSource }) => {
    return (


        < View  >

            {/* Card View */}

            < View style={styles.cardView} >

                <View style={styles.iconStyle}>  <Feather name="arrow-up-right" size={24} color="white" /></View>
                {/* Image View */}

                < View style={styles.imageView} >

                    <TouchableOpacity>
                        <Image source={imageSource} style={styles.cardImage} />
                    </TouchableOpacity>
                </View >

                {/* Text View */}
                < View style={styles.textView} >

                    <Text style={styles.cardText}>{productName}</Text>
                    <Text style={styles.cardPrice}>{productPrice}</Text>
                </View >

            </View >


        </View >
    )
}

export default TopProducts

const styles = StyleSheet.create({

    cardView: { width: '100%', height: 260, backgroundColor: '#5AB3F2', borderRadius: 10, top: 30, justifyContent: 'center', alignItems: 'center', gap: 18, marginBottom: 20, },

    imageView: {},

    cardImage: { width: 160, height: 150, },

    textView: { width: 162, gap: 8, height: 92.5, backgroundColor: '#111827', borderRadius: 10, },

    cardText: { color: 'white', fontSize: 16, fontWeight: '400', margin: 5 },

    cardPrice: { color: 'white', fontSize: 15, fontWeight: '400', margin: 5 },

    iconStyle: { position: 'absolute', left: 135, bottom: 230 }


})