import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'

export default function ColorItem({ data }: any) {

    const renderItem = ({ item }: any) => {
        return (
            <>
                <View style={styles.itemContainer}>
                    <View style={[styles.circle, {backgroundColor: item}]}/>
                    <View>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <FlatList
                data={data.colors}
                horizontal
                renderItem={(item) => renderItem(item)}
            />
        </>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginRight: 12,
        marginTop: 8,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        gap: 6,
        paddingHorizontal: 20,
        height: 30,
        alignItems: 'center',
        borderRadius: 20,
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: 8
    },
    text: {
        fontFamily: FONTS.Bold,
        fontSize: 14,
        color: 'black'
    }
})