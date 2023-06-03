import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CATEGORIES } from '../data/categories'
import { FONTS } from '../constants/Fonts'

export default function CategoryItem({selecetedCat, setSelectedCat}: any) {

    const renderCategoryItem = ({ item }: any) => {
        return (
            item.id == selecetedCat ? <TouchableOpacity onPress={() => handleCategory(item)} style={[styles.categoryItemContainer, { borderBottomColor: '#5956E9', borderBottomWidth: 2 }]}>
                <Text style={[styles.categoryItem, { color: '#5956E9' }]}>{item.name}</Text>
            </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => handleCategory(item)} style={styles.categoryItemContainer}>
                    <Text style={styles.categoryItem}>{item.name}</Text>
                </TouchableOpacity>
        )
    }

    const handleCategory = (item: any) => {
        setSelectedCat(item.id)
    }

    return (
        <>
            <FlatList
                data={CATEGORIES}
                horizontal
                renderItem={(item) => renderCategoryItem(item)}
            />
        </>
    )
}

const styles = StyleSheet.create({
    categoryItemContainer: {
        marginRight: 24,
    },
    categoryItem: {
        color: '#9A9A9D',
        fontSize: 18,
        fontFamily: FONTS.Bold,
    },
})