import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { useUser } from '../../hooks/useUser'
import GuestOnly from '../../components/auth/GuestOnly'



export default function AuthLayout() {

  const { user } = useUser()
  console.log('The USER is:', user)

  return (
    <>
      <GuestOnly>
        <StatusBar style='auto' />
        <Stack screenOptions={{ animation: 'none' }} />
      </GuestOnly>
    </>
  )
}

