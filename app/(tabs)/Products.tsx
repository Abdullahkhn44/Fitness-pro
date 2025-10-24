import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FilterScroll from '../../components/FilterScroll'
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductList from '../../components/ProductList';


const valueItems = [
  "Smart Watch",
  "Smart Band",
  "Fitness Special",
  "Casual"
]

const Products = () => {

  const [filterButton, setFilterButton] = useState('')


  return (

    <View style={styles.mainView}>

      <ScrollView key={filterButton ? 'filtered' : 'all'} horizontal={true} contentContainerStyle={styles.scrollStyle}>

        <Ionicons name="filter" size={24} color="white" />

        {/* If any filter selected  */}

        {filterButton ? (<View style={styles.filterView}>

          <TouchableOpacity style={styles.clearFilterButton} onPress={() => setFilterButton('')}>
            <Text style={styles.clearFilterText}>Clear filter</Text>
          </TouchableOpacity>

          <Text style={styles.scrollText}>{filterButton}</Text>

        </View>)

          :

          // If no filter selected
          (valueItems.map((item, index) => (

            <TouchableOpacity onPress={() => setFilterButton(item)}>
              <FilterScroll key={index} textValue={item} />
            </TouchableOpacity>

          ))
          )}

      </ScrollView>
      {/* Product List */}
      <ScrollView contentContainerStyle={styles.mainProductStyle}>

        <ProductList productPrice='3200-PKR' imageSource={require('../../assets/watches/fit4.png')} />
        <ProductList productPrice='3200-PKR' imageSource={require('../../assets/watches/fit3.png')} />
        <ProductList productPrice='3200-PKR' imageSource={require('../../assets/watches/fit2.png')} />
        <ProductList productPrice='3200-PKR' imageSource={require('../../assets/watches/fit1.png')} />
        <ProductList productPrice='3200-PKR' imageSource={require('../../assets/watches/fit5.png')} />


      </ScrollView>


    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: '#030712' },

  scrollStyle: { flexGrow: 1, height: 60, justifyContent: 'center', alignItems: 'center', gap: 15, marginTop: 20, flexDirection: 'row', paddingHorizontal: 15, },

  scrollText: {
    fontSize: 17, color: 'white', fontWeight: '500', height: 37, width: 136, textAlign: 'center', borderRadius: 8, textAlignVertical: 'center', backgroundColor: 'rgba(80, 130, 200, 0.12)', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  filterView: { flexGrow: 1, height: 60, flexDirection: 'row', alignItems: 'center' },

  clearFilterButton: { justifyContent: 'center', alignItems: 'center', left: 220, position: 'absolute' },

  clearFilterText: { color: 'white', fontSize: 16, fontWeight: '300', borderBottomWidth: 1, textAlign: 'center', textDecorationLine: 'underline' },

  mainProductStyle: { flexGrow: 1, gap: 25, marginTop: 20, alignItems: 'center', marginBottom: 30 },


})