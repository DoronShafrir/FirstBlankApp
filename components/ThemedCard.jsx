import {  StyleSheet, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View 
        style={[{backgroundColor: theme.uiBackground}, styles.card]}
        {...props} 
    />
  )
}

export default ThemedView

const styles = StyleSheet.create({
    card:{
        boarderRadius: 5,
        padding: 20,
    }
})