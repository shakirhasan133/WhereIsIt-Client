import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth, provider } from "../Firebase/firebase.config";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const AxiosSecure = UseAxiosSecure();

  // Sign in with Google
  const signInWithGoogleEmail = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   Sign Up With Email
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign in with Email
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   SignOut
  const signOutUser = () => {
    return signOut(auth);
  };

  // Update User Name and profile Photo
  const updateUserData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser?.email) {
          await AxiosSecure.post("/JWT", { email: currentUser.email });
          setUser(currentUser);
        } else {
          await AxiosSecure.get("/logout");
          setUser(currentUser);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe;
    };
  }, [AxiosSecure]);

  const authInfo = {
    signInWithGoogleEmail,
    signUpWithEmail,
    signInWithEmail,
    Loading,
    setLoading,
    user,
    setUser,
    signOutUser,
    error,
    setError,
    updateUserData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
