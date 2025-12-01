import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getProductById } from './data/centralProduct';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useAppSelector, useAppDispatch } from './hooks'
import { addToCart } from './redux/slices/cartSlice';
import Animated, { Easing, FadeOut, FadeInDown, FadeInLeft, FadeOutRight } from 'react-native-reanimated';

const productDetail = () => {

    const dispatch = useAppDispatch()


    const { productId } = useLocalSearchParams()
    const product = getProductById(productId)

    const handlePress = () => {
        dispatch(addToCart(product))
    }



    return (
        <LinearGradient style={styles.container} colors={['rgba(90,179,242)', '#030712']}
            start={{ x: -0.7, y: 0.1 }} end={{ x: 0, y: 0.55 }}
        >
            <Animated.View entering={FadeInDown.delay(1000).duration(1000).easing(Easing.linear)} exiting={FadeOut} style={styles.imageView} >


                <Image source={product.imageSource} style={styles.watchImage} />

            </Animated.View>


            <Animated.View entering={FadeInDown.delay(1000).duration(1000).easing(Easing.linear)} exiting={FadeOut} style={styles.textView}>
                <Text style={styles.productText}>{product.productName}</Text>
                <Text style={styles.productTextPrice}>{product.productPrice}</Text>
            </Animated.View>

            {/* watch descripton */}
            <Animated.ScrollView entering={FadeInDown.delay(1000).duration(1000).easing(Easing.linear)} exiting={FadeOut} style={styles.descriptionView}>
                <View style={styles.descriptionTextView}>
                    <Text style={styles.productDescriptionText}>
                        Watch Nova 2 Lite-OSW-814L(Smart Watch){"\n"}
                        Display Screen: 1.93″{"\n"}
                        AMOLED (368*448);{"\n"}
                        Wireless Version: V5.3;{"\n"}
                        Material: ABS/PC{"\n"}
                        Battery Type: Lithium polymer;{"\n"}
                        Battery Capacity: 300mAh;{"\n"}
                        Charging Time: 3 hours{"\n"}
                        Normal Usage Time: 8 days;{"\n"}
                        Standby Time: 28 days;{"\n"}
                        Watch Size: 41.32*38.3*9.7mm{"\n"}
                        Weight: 41.22g;{"\n"}
                        Waterproof: lP68{"\n"}
                        Battery Capacity: 300mAh;{"\n"}
                        Charging Time: 3 hours{"\n"}
                        Normal Usage Time: 8 days;{"\n"}
                        Standby Time: 28 days;{"\n"}
                        Watch Size: 41.32*38.3*9.7mm{"\n"}
                        Weight: 41.22g;{"\n"}
                        Waterproof: lP68{"\n"}
                    </Text>
                </View>

            </Animated.ScrollView>

            {/* BottomView Container */}

            <LinearGradient style={styles.bottomContainer} colors={['rgba(90,179,242)', '#030712']} start={{ x: 0, y: 0 }} end={{ x: 0.25, y: 0.95 }}>

                {/* counter and price view */}
                <View style={styles.counterPriceView}>
                    <View style={styles.counterPriceViewInner}>
                        <AntDesign name="minus-circle" size={25} color="white" />

                        <Text style={styles.countText}> 1 </Text>

                        <AntDesign name="plus-circle" size={25} color="white" />
                    </View>


                    <Text style={styles.productTextPrice}>{product.productPrice}</Text>

                </View>

                {/* Button View */}
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={handlePress}>
                        <Text style={styles.buttonText}>Add to basket</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>






        </LinearGradient >

    )
}

export default productDetail

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', backgroundColor: '#030712',
    },

    imageView: { width: '100%', height: 300, top: 30, alignItems: 'center', justifyContent: 'center', },

    watchImage: { height: 260, width: 150, filter: [{ brightness: 1.3 }] },


    textView: { width: '100%', height: '10%', top: 25, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 12, paddingBottom: 10 },

    productText: { color: 'white', fontSize: 23, fontWeight: '700', },

    productTextPrice: { color: 'white', fontSize: 20, fontWeight: '500', top: 10, },

    descriptionView: { top: 50, width: '100%', height: 'auto', paddingHorizontal: 12, },

    descriptionTextView: { paddingBottom: 50, },

    productDescriptionText: { color: 'white', fontSize: 17, fontWeight: '400', letterSpacing: 1, lineHeight: 28 },

    bottomContainer: { width: '95%', height: '20%', backgroundColor: 'skyblue', borderTopLeftRadius: 18, borderTopRightRadius: 18, },


    counterPriceView: { justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row', textAlign: 'center', textAlignVertical: 'center', alignItems: 'center', height: 'auto', width: 'auto', },

    counterPriceViewInner: { justifyContent: 'space-between', paddingHorizontal: 5, flexDirection: 'row', textAlign: 'center', textAlignVertical: 'center', alignItems: 'center', height: 'auto', width: 'auto', top: 11 },

    countText: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 8,
        fontWeight: '700'

    },

    buttonWrapper: { justifyContent: 'center', alignItems: 'center', marginTop: 55, height: 'auto', },


    buttonStyle: { width: '88%', height: 50, backgroundColor: '#5AB3F2', borderRadius: 8, textAlign: 'center', justifyContent: 'center', alignItems: 'center', },

    buttonText: { fontSize: 18, fontWeight: 'bold', color: 'white', },
})