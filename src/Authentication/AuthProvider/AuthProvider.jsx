import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] =  useState({})

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
        
    },[user])

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;