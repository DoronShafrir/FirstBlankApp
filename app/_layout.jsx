import { Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
import { BooksProvider } from '../contexts/BooksContext'


const RootLayout = () => {
  const colorScheme = useColorScheme()
  console.log('colorScheme:', colorScheme)
  const theme = Colors[colorScheme] ?? Colors.dark

  return (

    <View style={{ flex: 1 }}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <UserProvider>
        <BooksProvider>
        <View style={{ flex: 1 }}>

          <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTitleStyle: { color: theme.title },
            headerTintColor: theme.tintColor,
            navigationBarColor: theme.navBackground,

            headerTitleAlign: 'center',
          }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          </Stack>
        </View>
        </BooksProvider>
      </UserProvider>
      <Text style={{ textAlign: 'center', padding: 10, marginBottom: 25 }}>Footer</Text>

    </View>


  )
}

export default RootLayout

const styles = StyleSheet.create({})