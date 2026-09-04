import { StyleSheet } from 'react-native'

import ThemedView from '../../components/ThemedView.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import Spacer from '../../components/Spacer.jsx';


const Books = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>
            <Spacer  />
        </ThemedView>
    )
}

export default Books;


const styles = StyleSheet.create({
container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})