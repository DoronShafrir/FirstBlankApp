import { StyleSheet, Text, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors'
import { useState } from 'react';
import { useUser } from '../../hooks/useUser.jsx';
import { account } from "../../lib/appwrite.js";
//themed components
import ThemedView from '../../components/ThemedView.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import ThemedButton from '../../components/ThemedButton.jsx';
import Spacer from '../../components/Spacer.jsx';
import ThemedTextInput from '../../components/ThemedTextInput.jsx';




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await login(email, password)
            console.log('Login form submitted', 'email =>', email, 'password=>', password);
                        
        }
        catch (err) {
            console.log("Login screen caught:", err)
            setError(err.message)
           
        }
    }

   
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>
            <ThemedButton onPress={handleSubmit} >
                <Text style={{ color: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                    Login</Text>
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

            <Spacer />
            {error && <Text style={styles.error}>My Error: {error}</Text>}
           

            <Spacer height={100} />
            <Link href="/register" style={{ textAlign: 'center' }}>
                <ThemedText>
                    Register instead
                </ThemedText>
            </Link>

           
        </ThemedView>
    )
}

export default Login

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