import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home';
import Favorite from '../../screens/Favorite';
import Profile from '../../screens/Profile';
import Basket from '../../screens/Basket';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Favorite' component={Favorite} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Basket' component={Basket} />
        </Tab.Navigator>
    )
}