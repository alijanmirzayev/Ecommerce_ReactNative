import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color='black' />
        </SafeAreaView>
    )
}