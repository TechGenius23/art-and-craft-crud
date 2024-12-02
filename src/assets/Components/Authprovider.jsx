/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext,  } from "react";
import app from '../Firebaseconfig'
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, getAuth, TwitterAuthProvider, } from "firebase/auth";


export const AuthContext = createContext()

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
const twitterprovider = new TwitterAuthProvider();

const Authprovider = ({ children }) => {
  // const [user, setuser] = useState(null);
  // console.log(user);
  const auth = getAuth(app)


  // creatuser
  const createUser = (email,password) => {
    // console.log("Create User, ", user)

    return createUserWithEmailAndPassword(auth,email,password)
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
  const SignInWithGit = () => {
    return signInWithPopup(auth, githubprovider)
  }

  // Twitteruser
  const twiter = () => {
    return signInWithPopup(auth, twitterprovider)
  }

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
    twiter
  }
  return (
    <AuthContext.Provider value={allvalue}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;