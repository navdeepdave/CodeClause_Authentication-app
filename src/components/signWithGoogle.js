import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth } from './firebase';
import { toast } from "react-toastify";

function SignInwithGoogle() {
    function googleLogin() {
      const provider = new GoogleAuthProvider();
       signInWithPopup(auth, provider).then(async (result) => {
        console.log(result);
        toast.success("User logged in Successfully", {
            position: "top-center",
          }); 
        if(result.user){
            window.location.href="/profile";
        }
            });
    }
    return (
        <div>
            <p className="continue-p">--Or continue with--</p>
            <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
            onClick={googleLogin}
   
        >
                <img src={require("../google.png")} width="60%" alt="Google Sign-In" />
            </div>
        </div>
    );
}

export default SignInwithGoogle;
