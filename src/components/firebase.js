// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import the getAuth function
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RPgH6XF4meLnpvEP0B_E0Xnk57PeLk4",
  authDomain: "login-auth-e03e8.firebaseapp.com",
  projectId: "login-auth-e03e8",
  storageBucket: "login-auth-e03e8.appspot.com",
  messagingSenderId: "257940481348",
  appId: "1:257940481348:web:a3fdb8954d1e01c04e6311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { auth };
export const db=getFirestore(app);
export default app;

