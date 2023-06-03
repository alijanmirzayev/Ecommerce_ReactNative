import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home';
import Favorite from '../../screens/Favorite';
import Profile from '../../screens/Profile';
import Basket from '../../screens/Basket';
import HomeSvg from '../../assets/Icons/Home';
import FavoriteSvg from '../../assets/Icons/Favorite';
import ProfileSvg from '../../assets/Icons/Profile';
import BasketSvg from '../../assets/Icons/Basket';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopWidth: 0,
            }
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? <HomeSvg fill='#5956E9' stroke='#5956E9' /> : <HomeSvg stroke='black' />
                }
            }} />
            <Tab.Screen name='Favorite' component={Favorite} options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? <FavoriteSvg fill='#5956E9' stroke='white' /> : <FavoriteSvg stroke='white' />
                }
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? <ProfileSvg fill='#5956E9' stroke='white' /> : <ProfileSvg stroke='black' />
                }
            }} />
            <Tab.Screen name='Basket' component={Basket} options={{
                tabBarIcon: ({ focused }) => {
                    return focused ? <BasketSvg fill='#5956E9' stroke='white' /> : <BasketSvg stroke='black' />
                }
            }} />
        </Tab.Navigator>
    )
}