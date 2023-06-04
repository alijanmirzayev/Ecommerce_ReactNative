import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { FONTS } from '../constants/Fonts';
import { StateType } from '../redux';
import Loading from './Loading';

export default function CategoryItem({ selecetedCat, setSelectedCat }: any) {

    const { data, error, status } = useSelector((state: StateType) => state.categories)
    
    const renderCategoryItem = ({ item }: any) => {

        return (
            item._id == selecetedCat ? <TouchableOpacity onPress={() => handleCategory(item)} style={[styles.categoryItemContainer, { borderBottomColor: '#5956E9', borderBottomWidth: 2 }]}>
                <Text style={[styles.categoryItem, { color: '#5956E9' }]}>{item.name}</Text>
            </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => handleCategory(item)} style={styles.categoryItemContainer}>
                    <Text style={styles.categoryItem}>{item.name}</Text>
                </TouchableOpacity>
        )
    }

    const handleCategory = (item: any) => {
        setSelectedCat(item._id)
    }

    return (
        <>
            {
                status == 'pending' || status == null ? <Loading /> : <FlatList
                data={data}
                horizontal
                renderItem={(item) => renderCategoryItem(item)}
            />
            }
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