import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Start from '../screens/Start';
import TabNavigation from './Tab/Tab';

const Stack = createNativeStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Start' component={Start}/>
                <Stack.Screen name='Main' component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}