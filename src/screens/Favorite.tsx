import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'
import NoFavorite from '../components/NoFavorite'

export default function Favorite() {
  return (
    <>
      <SafeAreaView style={styles.container}>

        <NoFavorite />

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT.background,
    flex: 1
  },
})