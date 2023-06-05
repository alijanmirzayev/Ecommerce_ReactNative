import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Delete from '../assets/Icons/Delete'
import { FONTS } from '../constants/Fonts'
import { COLORS } from '../constants/Colors'
import Notification from '../assets/Icons/Notification'
import BasketItem from '../components/BasketItem'
import { instance } from '../network/AxiosInstance'
import Loading from '../components/Loading'

export default function Basket({ route }: any) {

  const [data, setData] = useState(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    instance.get('/api/basket/647c6bca2b23ba151ca5934f')
      .then(resp => {
        setData(resp.data)
        setloading(false)
      })
      .catch(err => console.log('Err', err))
  }, [loading])

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Basket</Text>
          </View>

          <View style={styles.deleteIcon}>
            <Delete />

          </View>

        </View>

        <View style={styles.promotionContainer}>
          <Notification />
          <Text style={styles.promotionText}>Delivery for FREE until the end of the month</Text>
        </View>

        <View style={styles.basketItemContainer}>
          {
            loading ? <Loading /> : <BasketItem data={data} loading={loading} setloading={setloading} />
          }
        </View>

        <View style={styles.priceBasketContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Total</Text>
            <Text style={styles.price}>$ 914</Text>
          </View>

          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Checkout</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT.background,
    flex: 1,
  },
  headerContainer: {
    marginTop: 22,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  promotionContainer: {
    marginTop: 22,
    backgroundColor: '#D3F2FF',
    marginHorizontal: 50,
    borderRadius: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
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
    marginBottom: 12,
  },
  basketItemContainer: {
    height: '70%'
  },
  headerText: {
    fontFamily: FONTS.ExtraBold,
    fontSize: 18,
    color: COLORS.LIGHT.title,
  },
  promotionText: {
    fontFamily: FONTS.ExtraBold,
    fontSize: 14,
    color: COLORS.LIGHT.title,
  },
  deleteIcon: {
    position: 'absolute',
    right: 0,
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