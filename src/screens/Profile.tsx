import { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Location from '../assets/Icons/Location';
import Loading from '../components/Loading';
import { COLORS } from '../constants/Colors';
import { FONTS } from '../constants/Fonts';
import { AppDispatch, StateType } from '../redux';
import { getById } from '../redux/Slice/UserSlice';

export default function Profile() {

    let dispatch = useDispatch<AppDispatch>()
    const { data, error, status } = useSelector((state: StateType) => state.users)

    useEffect(() => {
        dispatch(getById())
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>

            {
                status == 'pending' || status == null ? <Loading /> : <>
                    <View style={styles.profilePhotoContainer}>
                        <Image style={styles.profilePhoto} source={{ uri: data?.profilePhoto }} />
                    </View>
                    <View style={styles.profileNameContainer}>
                        <Text style={styles.profileName}>{data?.fullname}</Text>
                    </View>
                    <View style={styles.addressHeaderContainer}>
                        <View style={styles.addressIconContainer}>
                            <Location />
                        </View>
                        <View style={styles.addressContainer}>
                            <Text style={styles.addressText}>Address: {data?.address.state}</Text>
                            <Text style={styles.addressText}>{data?.address.street}</Text>
                            <Text style={styles.addressText}>{data?.address.city}, {data?.address.country}</Text>
                        </View>
                    </View>
                </>
            }

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