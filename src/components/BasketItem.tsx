import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { BASKET } from '../data/basket'
import { FONTS } from '../constants/Fonts'
import { COLORS } from '../constants/Colors'

export default function BasketItem() {

    const renderItem = ({ item }: any) => {
        return (
            <>
                <View style={styles.container}>

                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: item.image }} />
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.title}>{item.brand} {item.model}</Text>
                        <Text style={styles.price}>$ {item.price}</Text>

                        <View style={styles.quantityContainer}>
                            <View>
                                <Text style={styles.quantityText}>Quantity</Text>
                            </View>

                            <View style={styles.quantityCountContainer}>
                                <Text style={styles.reducer}>-</Text>
                                <Text style={styles.quantity}>2</Text>
                                <Text style={styles.reducer}>+</Text>
                            </View>

                        </View>

                    </View>

                </View>

            </>
        )
    }

    return (
        <>
            <FlatList
                data={BASKET}
                renderItem={(item) => renderItem(item)}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 12,
        marginHorizontal: 40,
        borderRadius: 14,
    },
    imageContainer: {
        padding: 8,
    },
    descriptionContainer: {
        padding: 8,
        width: 200,
    },
    quantityContainer: {
        marginTop: 12,
        flexDirection: 'row'
    },
    quantityCountContainer: {
        flexDirection: 'row',
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
    },
    image: {
        width: 80,
        height: 105,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontFamily: FONTS.Bold,
        color: COLORS.LIGHT.title
    },
    price: {
        fontSize: 18,
        fontFamily: FONTS.Bold,
        color: '#5956E9'
    },
    quantityText: {
        fontSize: 16,
        fontFamily: FONTS.Regular,
        color: COLORS.LIGHT.title,
        alignItems: 'center'
    },
    reducer: {
        backgroundColor: '#7DCCEC',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        fontSize: 16,
        color: 'white'
    },
    quantity: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.LIGHT.title
    }
})