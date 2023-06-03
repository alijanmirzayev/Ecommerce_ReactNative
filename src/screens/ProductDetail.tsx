import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeft from '../assets/Icons/ArrowLeft'
import Heart from '../assets/Icons/Heart'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'
import ColorItem from '../components/ColorItem'

export default function ProductDetail({ route, navigation }: any) {

  const redirectBasket = (data: any) => {
    navigation.navigate('Basket', data)
  }

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <ArrowLeft />
          <Heart />
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: route.params.image }} />
        </View>

        <View style={styles.detailContainer}>

          <Text style={styles.title}>{route.params.brand} {route.params.model}</Text>

          <View>
            <Text style={styles.colorsText}>Colors</Text>

            <ColorItem data={route.params} />

            <Text style={styles.description}>{route.params.description}</Text>
          </View>

          <View style={styles.priceBasketContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$ {route.params.price}</Text>
            </View>

            <TouchableOpacity onPress={() => redirectBasket(route.params)} style={styles.btnContainer}>
              <Text style={styles.btnText}>Add to Basket</Text>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%'
  },
  headerContainer: {
    marginTop: 12,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    marginTop: 12,
    height: '50%',
  },
  detailContainer: {
    marginTop: 12,
    height: '40%',
    marginHorizontal: 18,
  },
  priceBasketContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  priceContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnContainer: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#5956E9',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.title,
    fontSize: 28,
  },
  colorsText: {
    marginTop: 8,
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.title,
    fontSize: 19,
  },
  description: {
    marginTop: 12,
    fontFamily: FONTS.Regular,
    color: 'gray',
    fontSize: 16,
  },
  priceText: {
    fontFamily: FONTS.Regular,
    color: COLORS.LIGHT.title,
    fontSize: 17,
  },
  price: {
    fontFamily: FONTS.ExtraBold,
    color: '#5956E9',
    fontSize: 24,
  },
  btnText: {
    fontSize: 20,
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.description,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 25,
  }
})