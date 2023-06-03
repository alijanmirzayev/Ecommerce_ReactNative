import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'

export default function NoFavorite() {
  return (
    <>

        <Text style={styles.headerText}>Favorites</Text>
        <Image source={require('../assets/Images/no-favorites.png')} />
        <View style={styles.warningContainer}>
          <Text style={styles.headerText}>No Favorites Yet</Text>
          <Text style={styles.description}>Hit the orange button down below to Create an order</Text>
        </View>

        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Start Ordering</Text>
        </View>

    </>
  )
}

const styles = StyleSheet.create({
  warningContainer: {
    marginHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    backgroundColor: '#58C0EA',
    marginTop: 12,
    borderRadius: 10,
    marginHorizontal: 80,
    paddingVertical: 18,
  },
  headerText: {
    marginHorizontal: 16,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.title
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: FONTS.Regular,
    color: 'gray'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONTS.Regular,
    color: 'white'
  }
})