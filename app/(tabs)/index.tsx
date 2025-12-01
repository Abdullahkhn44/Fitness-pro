import Animated, { Easing, FadeOut, FadeInDown, FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Banner from '../../components/Banner';
import React, { useEffect, useState } from 'react';
import Scroll from '../../components/Scroll';
import TopProducts from '../../components/TopProducts';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function App() {


    // Array data for the animated component
    const slides = [
        {
            source: require('../../assets/watches/fit1.png'),
            headText: 'Train Smarter, Get Stronger',
        },
        {
            source: require('../../assets/watches/fit2.png'),
            headText: 'Crafted for Champions',
        },
        {
            source: require('../../assets/watches/fit3.png'),
            headText: 'Track Progress, Push Limits',
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % 3)
        }, 6000);

        return () => clearInterval(interval);
    }, [])


    return (
        <ScrollView contentContainerStyle={styles.mainView}>

            <StatusBar backgroundColor='#030712' style='light' translucent />

            <Animated.View entering={FadeInDown.delay(500).duration(700).easing(Easing.linear)} exiting={FadeOut} style={styles.bannerView}  >

                {/* <AntDesign name="thunderbolt" size={102} color="#030712" style={styles.thunderIcon} /> */}

                <Animated.Image entering={FadeInDown.delay(500).duration(700).easing(Easing.linear)} exiting={FadeOut}
                    source={require('../../assets/watches/fit1.png')}
                    style={styles.watchImage}

                />

            </Animated.View>

            <Animated.Text entering={FadeInDown.delay(500).duration(700).easing(Easing.linear)} exiting={FadeOut} style={styles.bannerText}>Runner Pro</Animated.Text>

            <Animated.Text entering={FadeInDown.delay(500).duration(700).easing(Easing.linear)} exiting={FadeOut} style={styles.bannerText2}>Flash Sale 15% Off</Animated.Text>


            {/* Slider Content starts here */}

            <Animated.View key={currentIndex} entering={FadeInLeft.delay(700).duration(700).easing(Easing.linear)} exiting={FadeOutRight.delay(100).duration(500).easing(Easing.linear)}  >

                <Banner
                    source={slides[currentIndex].source}
                    headText={slides[currentIndex].headText}
                />
            </Animated.View>
            {/* Slider content ends here */}


            {/* Marquee logos start */}

            <Text style={styles.textStyle}>We Work With the people all around the world</Text>

            <Scroll />

            {/* Marquee Ends */}


            {/* Favourite Products Starts */}

            <View style={styles.topProductsView}>
                <Text style={styles.topProductsText}>Our Customer's Favourite</Text>
            </View>


            <View style={styles.cardView}>

                <TopProducts />



            </View>

            {/* Top Products Ends */}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainView: {

        alignItems: 'center',
        backgroundColor: '#030712',
        flexGrow: 1
    },
    bannerView: {
        width: 325,
        height: 90,
        backgroundColor: '#5AB3F2',
        borderRadius: 6,
        marginTop: 5,

        justifyContent: 'center',


    },


    watchImage: { left: 230, height: 110, width: 100, filter: [{ brightness: 1.3 }] },

    thunderIcon: { position: 'absolute', right: 60 },

    bannerText: { color: 'white', fontSize: 16, fontWeight: '700', bottom: 85, right: 115 },

    bannerText2: { color: 'white', fontSize: 20, fontWeight: '700', bottom: 65, right: 70, },

    textStyle: { top: 45, color: '#bfbfbf', fontSize: 14, fontWeight: "700" },

    cardView: {
        flexDirection: 'row', paddingHorizontal: 12,
        marginTop: 130, paddingBottom: 18, height:'auto',
    },

    topProductsView: { top: 105 },

    topProductsText: { color: 'white', fontSize: 23, fontWeight: '400' }

})



