import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilterScroll = ({ textValue }) => {


    return (

        <View> <Text style={styles.scrollText}>{textValue}</Text></View>
    )
}

export default FilterScroll

const styles = StyleSheet.create({


    scrollText: {
        fontSize: 18, color: 'white', fontWeight: '500', height: 38, width: 138, textAlign: 'center', borderRadius: 8, textAlignVertical: 'center', backgroundColor: 'rgba(80, 130, 200, 0.12)', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.25)',

    },
})