import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';




const Login = () => {
    const [loggedInUser,setLoggedInUser] = useAuth();

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    initializeApp(firebaseConfig);
    const auth = getAuth();

    const handleGoogleSignIn = () =>{
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const {displayName, email, photoURL} = result.user;
            const signedInUser ={
                name: displayName,
                email: email,
                photo: photoURL
            }
            setLoggedInUser(signedInUser);
            storeAuthToken();
            // navigate(from, { replace : true });
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    // ======================================================================;
    const register = async () =>{
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            const { registerEmail, photoURL} = user;
            const signedInUser ={
                email: registerEmail,
                photo: photoURL
            }
            setLoggedInUser(signedInUser);
            navigate(from, { replace : true });
            // console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const login = async () =>{
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            setLoggedInUser(user);
            navigate(from, { replace : true });
            // console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () =>{
        await signOut(auth);
    }
    

    // ============  back-end verification  =============== firebase;
    const storeAuthToken = () =>{
        auth.currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // Send token to your backend via HTTPS
            sessionStorage.setItem('token', idToken);
            navigate(from, { replace : true });
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <>
            <div>
                <button onClick={handleGoogleSignIn} style={{fontSize:'30px',cursor:'pointer'}}>Google</button>
                <Link style={{color:'#fff', marginRight:'10px',fontSize:'24px', display:'block', marginTop:'10px'}} to='/'>Home</Link>
            </div>
            <div style={{paddingBottom:'60px'}}>
                <div style={{margin:'50px 0'}}>
                    <h2  style={{marginBottom:'30px'}}>Register User</h2>
                    <input 
                        type="email" 
                        placeholder='Email' 
                        onChange={(event) =>{
                            setRegisterEmail(event.target.value)
                        }
                        } />

                    <input type="password" placeholder='Password' onChange={(event) =>{setRegisterPassword(event.target.value)}} />
                    <button onClick={register}>Create User</button>
                </div>
                <div  style={{marginBottom:'50px'}}>
                    <h2 style={{marginBottom:'30px'}}>Login User</h2>
                    <input type="email" placeholder='Email'  onChange={(event) =>{setLoginEmail(event.target.value)}} />
                    <input type="password" placeholder='Password' onChange={(event) =>{setLoginPassword(event.target.value)}} />
                    <button onClick={login}>Login User</button>
                </div>
                <div>
                    <h1  style={{marginBottom:'30px'}}>User Info</h1>
                    <h3>mail:</h3>
                    {/* {userInfo?.email} */}
                    <button onClick={logout}>Sign Out</button>
                </div>

            </div>
        </>

    );
};

export default Login;