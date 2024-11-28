/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,} from "firebase/auth";
import auth from "../Firebaseconfig";

export const AuthContext = createContext()

const googleprovider = new GoogleAuthProvider();
const githubprovider=new GithubAuthProvider();
const Authprovider = ({ children }) => {
    // const [user, setuser] = useState(null);
    // console.log(user);
   


    // creatuser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // emailleuser
    const signInWithEmail = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
      };

    // googleuser
    const signInWithGoogle = () => {
        
        return signInWithPopup(auth, googleprovider);
      };

    // facebookuser

    // GitHubuser
    const SignInWithGit=()=>{
        return signInWithPopup(auth, githubprovider)
      }

    // Twitteruser
    

// observer
// useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setuser(user)
//       };

//     })
//   }, []);





    const allvalue = {
        createUser,
        signInWithEmail,
        signInWithGoogle,
        SignInWithGit,
    }
    return (
        <AuthContext.Provider value={allvalue}>{children}</AuthContext.Provider>
    );
};

export default Authprovider;