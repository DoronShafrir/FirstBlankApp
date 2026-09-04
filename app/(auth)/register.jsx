import { StyleSheet, Text, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors'
import { useState } from 'react';
//themed components
import ThemedView from '../../components/ThemedView.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import ThemedButton from '../../components/ThemedButton.jsx';
import Spacer from '../../components/Spacer.jsx';
import ThemedTextInput from '../../components/ThemedTextInput.jsx';
import { useUser } from '../../hooks/useUser.jsx'



const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { register } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await register(email, password)
            console.log('Register form submitted', 'email =>', email, 'password=>', password);
            setError(error.message)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register for an account
            </ThemedText>
            <ThemedButton onPress={handleSubmit} >
                <Text style={{ color: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                    Register</Text>
            </ThemedButton>

            <ThemedTextInput
                style={{ width: '80%', marginBottom: 20 }}
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />
            <ThemedTextInput
                style={{ width: '80%', marginBottom: 20 }}
                placeholder='Password'
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <Spacer height={100} />
            {error && <Text style={styles.error}>{error.message}</Text>}
            <Spacer height={100} />
            <Link href="/login" style={{ textAlign: 'center' }}>
                <ThemedText>
                    Go to login
                </ThemedText>
                {error && <Text style={styles.error}>My Error: {error}</Text>}
                {error && console.log(error)}
            </Link>
        </ThemedView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        marginHorizontal: 10,
    }
})