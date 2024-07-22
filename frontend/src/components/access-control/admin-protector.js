import { Navigate } from "react-router-dom"
import { useUser } from "../../context/user-context"

export const WithAdminProtector = ({ children }) => {
    const { isAdmin } = useUser()
    if (isAdmin) {
        return children
    }
    return <Navigate to="https://library-management-app-1.onrender.com/" replace />
}
