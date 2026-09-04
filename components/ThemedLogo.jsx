import { Image, useColorScheme } from 'react-native'
import React from 'react'

//images
import logoStam from '../assets/img/doron_shafrir_logo_dark.png'
import logoLight from '../assets/img/doron_shafrir_logo_handwritten.png'
import logoDark from '../assets/img/doron_shafrir_logo_oak.png'


const ThemedLogo = () => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? logoDark : logoLight
  return (
   <Image source={logo} style={{width: 200, height: 200}} />
  )
}

export default ThemedLogo

