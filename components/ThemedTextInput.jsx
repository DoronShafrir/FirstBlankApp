import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  console.log("colorScheme:", colorScheme)
  console.log("theme:", theme)
  console.log("uiBackground:", theme.uiBackground)

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 5,
          borderRadius: 6
        },
        style
      ]}
      {...props}
    />
  )
}

export default ThemedTextInput

