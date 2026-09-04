import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import {Text} from 'react-native'
import ThemeLoader from "../ThemedLoader"

const GuestOnly = ({ children }) => {

    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/(dashboard)/profile')
        }

    }, [user, authChecked])
    if (!authChecked || user) {
        return (<ThemeLoader />
        )
    }
    return children
}

export default GuestOnly