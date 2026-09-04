import { StyleSheet, Text } from 'react-native'
import { useUser } from '../../hooks/useUser.jsx';

import ThemedView from '../../components/ThemedView.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import Spacer from '../../components/Spacer.jsx';
import ThemedButton from '../../components/ThemedButton.jsx';



const Profile = () => {
    const { logout, user } = useUser()

    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}>
                {user?.email}
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />

            <ThemedButton onPress={ ()=>{
                console.log('logout pressed')
                logout()}
                }>
               
                <Text style={{ color: '#f2f2f2' }}>Logout</Text>
            </ThemedButton>
        </ThemedView>
    )
}

export default Profile;


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