import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import Location from '../assets/Icons/Location'
import { FONTS } from '../constants/Fonts'
import { COLORS } from '../constants/Colors'

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.profilePhotoContainer}>
                <Image style={styles.profilePhoto} source={{uri: 'https://www.elitesingles.com/wp-content/uploads/sites/85/2020/06/2b_en_articleslide_sm2-350x264.jpg'}} />
            </View>
            <View style={styles.profileNameContainer}>
                <Text style={styles.profileName}>Rosina Doe</Text>
            </View>
            <View style={styles.addressHeaderContainer}>
                <View style={styles.addressIconContainer}>
                    <Location />
                </View>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressText}>Address: 43 Oxford Road</Text>
                    <Text style={styles.addressText}>M13 4GR</Text>
                    <Text style={styles.addressText}>Manchester Uk</Text>
                </View>
            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 41,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  headerContainer: {

  },
  headerText: {
    fontSize: 24,
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.title
  },
  profilePhotoContainer: {
      marginTop: 30
  },
  profilePhoto: {
    width: 76,
    height: 76,
    borderRadius: 40
  },
  profileNameContainer: {
      marginTop: 8
  },
  profileName: {
      fontSize: 22,
      fontFamily: FONTS.Bold,
      color: COLORS.LIGHT.title
  },
  addressHeaderContainer: {
      flexDirection: 'row',
      marginTop: 14
  },
  addressIconContainer: {
      marginRight: 10,
      paddingTop: 5,
  }, 
  addressContainer: {

  },
  addressText: {
    fontSize: 18,
    fontFamily: FONTS.Regular,
    color: COLORS.LIGHT.title
  }
})