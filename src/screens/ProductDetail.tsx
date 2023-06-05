import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StateType } from '../redux';
import ArrowLeft from '../assets/Icons/ArrowLeft'
import Heart from '../assets/Icons/Heart'
import { COLORS } from '../constants/Colors'
import { FONTS } from '../constants/Fonts'
import ColorItem from '../components/ColorItem'
import { getById } from '../redux/Slice/ProductDetailSlice';
import Loading from '../components/Loading';
import { instance } from '../network/AxiosInstance';

export default function ProductDetail({ route, navigation }: any) {

  let dispatch = useDispatch<AppDispatch>()
  const { data, error, status } = useSelector((state: StateType) => state.productDetail)

  useEffect(() => {
    dispatch(getById(route.params._id))
  }, [])

  const redirectBasket = (data: any) => {
    let body = {
      quantity: 1,
      productId: data._id,
      userId: '647c6bca2b23ba151ca5934f'
    }
    instance.post('/api/basket/', body).then(resp => {
      return
    }).catch(err => console.log(err))
    navigation.navigate('Basket', data)
  }

  return (
    <>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>
          <ArrowLeft onPress={() => navigation.goBack()} />
          <Heart />
        </View>

        {
          status == 'pending' || status == null ? <Loading /> : <>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: data?.image }} />
            </View>

            <View style={styles.detailContainer}>

              <Text style={styles.title}>{data?.brand} {data?.model}</Text>

              <View>
                <Text style={styles.colorsText}>Colors</Text>

                <ColorItem data={data} />

                <Text style={styles.description}>{data?.description}</Text>
              </View>

              <View style={styles.priceBasketContainer}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>Price</Text>
                  <Text style={styles.price}>$ {data?.price}</Text>
                </View>

                <TouchableOpacity onPress={() => redirectBasket(data)} style={styles.btnContainer}>
                  <Text style={styles.btnText}>Add to Basket</Text>
                </TouchableOpacity>
              </View>

            </View>
          </>
        }

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%'
  },
  headerContainer: {
    marginTop: 12,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    marginTop: 12,
    height: '50%',
  },
  detailContainer: {
    marginTop: 12,
    height: '40%',
    marginHorizontal: 18,
  },
  priceBasketContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  priceContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnContainer: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#5956E9',
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
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  },
  title: {
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.title,
    fontSize: 28,
  },
  colorsText: {
    marginTop: 8,
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.title,
    fontSize: 19,
  },
  description: {
    marginTop: 12,
    fontFamily: FONTS.Regular,
    color: 'gray',
    fontSize: 16,
  },
  priceText: {
    fontFamily: FONTS.Regular,
    color: COLORS.LIGHT.title,
    fontSize: 17,
  },
  price: {
    fontFamily: FONTS.ExtraBold,
    color: '#5956E9',
    fontSize: 24,
  },
  btnText: {
    fontSize: 20,
    fontFamily: FONTS.Bold,
    color: COLORS.LIGHT.description,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 25,
  }
})