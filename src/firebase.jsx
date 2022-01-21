import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAPI9t_p4lsUQ1AaaYpleRIDUGZt0FCX-A",
    authDomain: "auth-development-54655.firebaseapp.com",
    projectId: "auth-development-54655",
    storageBucket: "auth-development-54655.appspot.com",
    messagingSenderId: "62259994642",
    appId: "1:62259994642:web:27fa71de51e2bcf71e78cb",
    measurementId: "G-5R3JM2R59S"
})

const firestore = app.firestore();
export const database = {
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    formatDoc: (doc)=>{
        return({id: doc.id, ...doc.data()})
    },
    getCurrentTimestamp : firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app