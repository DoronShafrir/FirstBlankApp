import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { Permission, TablesDB } from "react-native-appwrite";
import { useUser } from '../hooks/useUser.jsx';


const DATABASE_ID = '6a95a7a90032c5d093b8'
const ROW_ID = 'books'




export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()
    async function fetchBooks() {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBooksById(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }
    async function createBook(data) {
        try {
            const newBook = await TablesDB.createRow(
                DATABASE_ID,
                ROW_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]


            )

        } catch (error) {
            console.error(error.message)
        }
    }

    async function deleteBook(id) {
        try {

        } catch (error) {
            console.error(error.message)
        }
    }
    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBooksById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>

    )
}