import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { CATEGORIES } from '../data/categories'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'
import Search from '../assets/Icons/Search'
import CategoryItem from '../components/CategoryItem'
import ProductItem from '../components/ProductItem'

const screenHeight = Dimensions.get('screen').height
const header = screenHeight / 4
const product = screenHeight - header

export default function Home({navigation}: any) {
  const [selecetedCat, setSelectedCat] = useState<Number>(1)

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>

          <View style={styles.searchContainer}>
            <TextInput placeholder='Search' placeholderTextColor='#868686' style={styles.search} />
            <View style={{ position: 'absolute', top: 14, left: 18 }}>
              <Search />
            </View>
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Order Online</Text>
            <Text style={styles.headerText}>collect in store</Text>
          </View>

        </View>

        <View style={styles.otherContainer}>

          <View style={styles.categoryContainer}>
            <CategoryItem selecetedCat={selecetedCat} setSelectedCat={setSelectedCat} />
          </View>

          <View style={styles.productContainer}>
            <ProductItem selecetedCat={selecetedCat} navigation={navigation}/>
          </View>

        </View>

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT.background,
    flex: 1
  },
  headerContainer: {
    height: screenHeight / 4,
  },
  otherContainer: {
    height: product,
  },
  searchContainer: {
    marginHorizontal: 18,
    marginTop: 46,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 30
  },
  headerTextContainer: {
    marginTop: 22,
    marginHorizontal: 18,
  },
  categoryContainer: {
    marginHorizontal: 18,
  },
  productContainer: {
    marginTop: 24,
    marginLeft: 24
  },
  search: {
    color: '#868686',
    fontSize: 17,
    fontFamily: FONTS.Regular,
    marginLeft: 48
  },
  headerText: {
    color: COLORS.LIGHT.title,
    fontFamily: FONTS.Bold,
    fontSize: 34
  }
})