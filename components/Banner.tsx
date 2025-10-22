import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

// source={require('../assets/watches/fit1.png')}

const Banner = ({ source, headText }) => {



    return (
        <View style={styles.headerView}>

            {/* image wrapper */}
            <View style={styles.imgWrapper}>
                <Image style={styles.bannerImage} source={source} />

            </View>

            {/* Text wrapper */}
            <View style={styles.textWrapper}>
                <Text style={styles.textOne}>{headText}</Text>

            </View>

            {/* Button wrapper */}
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Order Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    headerView: { width: 325, height: 325, bottom: 35 },

    textOne: { fontSize: 22, fontWeight: '300', color: 'white', },

    imgWrapper: { justifyContent: 'center', alignItems: 'center' },

    bannerImage: { height: 240, width: 200, filter: [{ brightness: 1.35 }] },

    textWrapper: { marginTop: 10, justifyContent: 'center', alignItems: 'center' },
    buttonWrapper: { justifyContent: 'center', alignItems: 'center', marginTop: 30 },

    buttonStyle: { width: 160, height: 45, backgroundColor: '#5AB3F2', borderRadius: 8, textAlign: 'center', justifyContent: 'center', alignItems: 'center', },

    buttonText: { fontSize: 19, fontWeight: 'bold', color: 'white', },
})