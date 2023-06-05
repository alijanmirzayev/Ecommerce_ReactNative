import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { PRODUCTS } from '../data/products'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'
import { StateType } from '../redux';
import Loading from './Loading';

export default function ProductItem({selecetedCat, navigation}: any) {

    const { data, error, status } = useSelector((state: StateType) => state.products)

    const redirectDetailPage = (item: any) => {
        navigation.navigate('ProductDetail', item)
    }

    const renderItem = ({ item }: any) => {
        return (
            selecetedCat == item.categoryId ? <TouchableOpacity onPress={() => redirectDetailPage(item)} style={styles.container}>

            <View style={styles.description}>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </View>

                <View style={styles.description}>
                    <Text style={styles.brandText}>{item.brand}</Text>
                    <Text style={styles.modelText}>{item.model}</Text>
                    <Text style={styles.priceText}>$ {item.price}</Text>
                </View>

            </View>

        </TouchableOpacity> : null
        )
    }
    return (

        <>
            {
                status == 'pending' || status == null ? <Loading /> : <FlatList
                data={data}
                horizontal
                renderItem={(item) => renderItem(item)}
            />
            }
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 25,
        marginVertical: 90,
        padding: 20,
        paddingVertical: 30,
        alignItems: 'center',
        marginHorizontal: 20
    },
    imageContainer: { alignSelf: 'center', marginTop: -30, marginBottom: 10 },
    image: { width: 160, height: 160, marginTop: -50, borderRadius: 80, right: 5, resizeMode: 'contain'},

    img: {
        alignSelf: 'center',
    },
    description: {

        gap: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    brandText: { fontSize: 24, fontFamily: FONTS.Bold, color: COLORS.LIGHT.title },
    modelText: { fontSize: 18, fontFamily: FONTS.Regular, color: '#868686' },
    priceText: { fontSize: 20, color: '#5956E9', fontFamily: FONTS.Bold, paddingTop: 40 }
})