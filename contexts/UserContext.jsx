import { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authChecked,  setAuthChecked] = useState(false)
    

    async function login(email, password) {
        console.log('It arrived to login function')
        try {
            await account.createEmailPasswordSession({ email, password })
            const response = await account.get()
            console.log("Appwrite user response:", response)
            setUser(response)
        } catch (err) {
            console.log("Login error:", err.message);
            throw Error(err.message)  
                    
        }
        
    }
    async function register(email, password) {
        try {
            await account.create({ userId: ID.unique(), email, password })
            await login(email, password)
        } catch (error) {
            throw Error(error.message)
           
        }
    }
    async function logout() {
        console.log("Logout successful")
        try {
            await account.deleteSession({ sessionId: "current" })          
            setUser(null)
            
        } catch (error) {
            console.log('Meassage form logout:', error.message)
            throw Error(error.message)
        }
    }

    async function getInitialUserValue() {
    console.log("getInitialUserValue started");

    try {
        const response = await account.get();
        console.log("First response:", response);


        console.log("account.get response:", response);

        setUser(response);
    }
    catch (error) {
        console.log("account.get ERROR:", error.message);

        setUser(null);
    }
    finally {
        console.log("finally is running");

        setAuthChecked(true);
    }
}

    useEffect(() => {
        console.log("First Time loaded")
        getInitialUserValue()
    }, [])

    return (
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    )
}