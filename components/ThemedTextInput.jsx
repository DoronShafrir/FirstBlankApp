import { TextInput, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  console.log("colorScheme:", colorScheme)
  console.log("theme:", theme)
  console.log("uniBackground:", theme.uniBackground)

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uniBackground,
          color: theme.text,
          padding: 10,
          borderRadius: 6,
          height: 20,
          marginHorizontal: 30,
          marginBottom: 20,
          minHeight: 40,
        },
        style
      ]}
      {...props}
    />
  )
}

export default ThemedTextInput

