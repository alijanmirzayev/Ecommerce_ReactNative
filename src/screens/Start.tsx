import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/Fonts'

export default function Start({navigation}: any) {
  
  const nextPage = () => {
    navigation.navigate('Main')
  }

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Find your</Text>
          <Text style={styles.headerText}>Gadget</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/Images/Start.png')} />
        </View>

        <TouchableOpacity onPress={nextPage} style={styles.btnContainer}>
          <Text style={styles.btnText}>Get started</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5956E9',
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: 46,
    marginTop: 74
  },
  imageContainer: {
    alignItems: 'center',
  },
  btnContainer: {
    marginHorizontal: 44,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
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
  headerText: {
    color: '#FFFFFF',
    fontSize: 65,
    fontFamily: FONTS.ExtraBold
  },
  image: {
    resizeMode: 'contain',
    width: '95%',
    height: 410
  },
  btnText: {
    fontSize: 20,
    fontFamily: FONTS.Bold,
    color: '#5956E9',
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 25,
  }
})