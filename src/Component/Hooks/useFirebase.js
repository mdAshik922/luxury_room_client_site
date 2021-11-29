
import { getAuth, getIdToken,  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializetion from "../Firebase/Firebase.init";

initializetion();
const useFirebase = () => {
    const [ user, setUser] = useState({});
const [loading, setLoading] = useState(true);
const [ error, setError] = useState('');
const [admin, setAdmin] = useState(false);
const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

const register = (email, password, name, ) =>{
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
              // save user to the database
              saveUser(email, name, 'POST');
              // send name to firebase after creation
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
        
      });
  })
  .catch((error) => {
    setError(error.message);
    
  })
  .finally(() => setLoading(false));
};


const login = (email, password, location, navigate) => {
  setLoading(true);
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const destination = location?.state?.from || '/';
          navigate(destination);
          setError('');
      })
      .catch((error) => {
          setError(error.message);
      })
      .finally(() => setLoading(false));
};

const signInUsingGoogle = (location, navigate) => {
  setLoading(true);
  signInWithPopup(auth, googleProvider)
      .then((result) => {
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT');
          setError('');
          const destination = location?.state?.from || '/';
          navigate(destination);
      }).catch((error) => {
          setError(error.message);
      }).finally(() => setLoading(false));
};

useEffect(() => {
  fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
}, [user.email]);

const logOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
};

useEffect(() => {
   const unsubscribed= onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          getIdToken(user)
          .then(idToken => {
              setToken(idToken);})
        } else {
         setUser({});
        }
      });
    return () => unsubscribed;
    
}, [auth]);


const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch('http://localhost:5000/users', {
      method: method,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then();
};

    return {
        user,
        admin,
        loading,
        error,
        token,
        register,
        login,
        signInUsingGoogle,
        logOut
        
    }
};

export default useFirebase;