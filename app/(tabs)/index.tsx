import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function App() {

    return (
        <View style={style.mainView}>

            <StatusBar backgroundColor='#030712' style='light' translucent />

            <View style={style.bannerView}  >

                <Image
                    source={require('../../assets/watches/fit1.png')}
                    style={style.watchImage}

                />

            </View>
            <Text style={style.bannerText}>Runner Pro</Text>
            <Text style={style.bannerText2}>Fit Watch</Text>

        </View>
    );
}

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#030712'
    },
    bannerView: {
        width: 325,
        height: 90,
        backgroundColor: '#5AB3F2',
        borderRadius: 6,
        marginTop: 10,

        justifyContent: 'center',

    },


    watchImage: {
        left: 230, height: 100, width: 100,

    },
    bannerText: { color: 'white', fontSize: 16, fontWeight: '700', bottom: 85, right: 115 },

    bannerText2: { color: 'white', fontSize: 20, fontWeight: '700', bottom: 65, right: 110, },
  
})



