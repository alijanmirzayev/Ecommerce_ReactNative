import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Start from '../screens/Start';
import TabNavigation from './Tab/Tab';
import ProductDetail from '../screens/ProductDetail';
import { Provider } from 'react-redux';
import { store } from '../redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
    Start: undefined;
    Main: undefined;
    ProductDetail: undefined
};

export default function Main() {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Start' component={Start} />
                    <Stack.Screen name='Main' component={TabNavigation} />
                    <Stack.Screen name='ProductDetail' component={ProductDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}