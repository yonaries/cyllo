import { User } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';

type Props = {
    currentUser: User;
}
const initialState = {
    currentUser: undefined
}

const AuthContext = React.createContext<{
    currentUser: User | undefined;
}>(initialState);

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user!);
            setIsLoading(false);
            if (!user) navigate('/signin')
            // if (user) navigate('/dashboard')
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser
    }

    return (
        <AuthContext.Provider value={value} >
            {!isLoading ? children : <h3>Loading</h3>}
        </AuthContext.Provider>
    )
}

export default AuthProvider