import {  StyleSheet, Pressable } from 'react-native'
import { Colors } from '../constants/Colors'


function ThemedButton({ style, ...props }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.btn,
                pressed && styles.pressed,
                style
            ]}
            {...props}
        />
    )
}



export default ThemedButton

const styles = StyleSheet.create({
    btn:{       
        backgroundColor: Colors.primary,
        borderRadius: 15,
        padding: 18,
     /*   width:250,
        marginHorizontal: 'center',
        alignSelf: 'center',         
        alignItems: 'center', */
    },
    Pressed: {
        opacity: 0.5,
    },
})
