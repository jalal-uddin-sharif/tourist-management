import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  //google login
  const googleProvide = new GoogleAuthProvider();
  const googleLogin = (location, navigate) => {
    signInWithPopup(auth, googleProvide)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state || "/");
      })
      .catch((err) =>{
        //  console.log(err)
        });
  };
  //github login
  const githubProvider = new GithubAuthProvider();
  const githubLogin = (location, navigate) => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    loading,
    setLoading,
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
