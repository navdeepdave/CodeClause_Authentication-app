import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth } from './firebase';
import { toast } from "react-toastify";

function SignInwithFacebook() {
    function facebookLogin() {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                toast.success("User logged in Successfully with Facebook", {
                    position: "top-center",
                }); 
                if (result.user) {
                    window.location.href = "/profile";
                }
            })
            .catch((error) => {
                console.error("Error signing in with Facebook:", error);
                toast.error("Error signing in with Facebook. Please try again.", {
                    position: "top-center",
                });
            });
    }

    return (
        <div 
            style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
            onClick={facebookLogin}
        >
            <img 
                src={require("../facebook.png")} 
                width="60%" 
                alt="facebook Sign-In" 
            />
        </div>
    );
}

export default SignInwithFacebook;
