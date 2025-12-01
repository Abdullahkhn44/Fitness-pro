import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AutoScroll from '@homielab/react-native-auto-scroll';

const Scroll = () => {
    return (

        <AutoScroll style={styles.marquee} duration={30000} delay={500}>
           
            <View style={styles.logoRow}>

                <Image style={styles.logo} source={require('../assets/logos/24.png')} />
                <Image style={styles.logo} source={require('../assets/logos/anytime.png')} />
                <Image style={styles.logo} source={require('../assets/logos/cross.png')} />
                <Image style={styles.logo} source={require('../assets/logos/curves.png')} />
                <Image style={styles.logo} source={require('../assets/logos/equinox.png')} />
            </View>
        </AutoScroll>

    )
}

export default Scroll

const styles = StyleSheet.create({
  
    marquee: {
        top:65,
        width: '100%',
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    
      },
      logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      logo: {
        width: 80,
        height: 40,
        marginHorizontal: 30,
        tintColor: '#bfbfbf'
      },
    
})