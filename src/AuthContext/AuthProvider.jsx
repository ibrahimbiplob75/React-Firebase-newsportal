import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.confiq";



export const ContextProvider=createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser ]=useState(null);

    const createUser=(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password);
    }

    const logout=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (CurrentUser) => {

            if (CurrentUser) {
            
              //const userid = CurrentUser.uid;
              setUser(CurrentUser);
              
            }
            
        });
        return ()=>{
            unSubscribe();
        }


    },[])


    const authInfo = {
      user,
      createUser,
      logout,
      signIn,
    };
    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};



export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};

