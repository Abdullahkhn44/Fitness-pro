import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FilterScroll from '../../components/FilterScroll'

const valueItems = [
  "Smart Watch",
  "Smart Band",
  "Fitness Special",
  "Casual"
]

const Products = () => {

  const [filterButton, setFilterButton] = useState('')

  const filterPress = (item) => {

    console.log(item)
    

  }

  return (
    <View style={styles.mainView}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollStyle}>

        {valueItems.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => filterPress(item)}>
              <FilterScroll key={index} textValue={item} />
            </TouchableOpacity>
          )
        })}




      </ScrollView>


    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#030712' },

  scrollStyle: { flexGrow: 1, height: 60, justifyContent: 'center', alignItems: 'center', gap: 15, marginTop: 20, flexDirection: 'row', paddingHorizontal: 15, },



})