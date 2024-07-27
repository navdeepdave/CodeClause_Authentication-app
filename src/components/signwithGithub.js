import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth } from './firebase';
import { toast } from "react-toastify";

function SignInwithGithub() {
    function githubLogin() {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                toast.success("User logged in Successfully with GitHub", {
                    position: "top-center",
                }); 
                if (result.user) {
                    window.location.href = "/profile";
                }
            })
            .catch((error) => {
                console.error("Error signing in with GitHub:", error);
                toast.error("Error signing in with GitHub. Please try again.", {
                    position: "top-center",
                });
            });
    }

    return (
        
            <div 
                style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
                onClick={githubLogin}
            >
                <img 
                    src={require("../github.png")} 
                    width="60%" 
                    alt="GitHub Sign-In" 
                />
            </div>
        
    );
}

export default SignInwithGithub;
