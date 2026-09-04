import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useBooks } from '../../hooks/useBooks.js';
import { useRouter } from 'expo-router';
import { useState } from 'react';


import ThemedView from '../../components/ThemedView.jsx';
import ThemedTextInput from '../../components/ThemedTextInput.jsx';
import ThemedButton from '../../components/ThemedButton.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import Spacer from '../../components/Spacer.jsx';



const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const { createBook } = useBooks()
    const router = useRouter()

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) return

        setLoading(true)

        await createBook({ title, author, description })

        //reset fields
        setTitle("")
        setAuthor("")
        setDescription("")

        //redirect
        router.replace('/books')

        //reset loading state
        setLoading(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <ThemedText title={true} style={styles.heading}>
                    Add a New Book
                </ThemedText>
                <Spacer />
                <ThemedTextInput
                    style={styles.input}
                    placeholder="Book Title"
                    onChangeText={setTitle}
                />
                <ThemedTextInput
                    style={styles.input}
                    placeholder="Book Author"
                    onChangeText={setAuthor}
                />
                <ThemedTextInput
                    style={styles.multiline}
                    placeholder="Book Description"
                    onChangeText={setDescription}
                />
                <Spacer />
                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <Text style={{ color: '#ffffff' }}>
                        {loading ? "Savivng..." : "Create Book"}
                    </Text>

                </ThemedButton>
            </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default Create;


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
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    }
})