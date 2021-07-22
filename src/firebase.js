import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD_dtTtrEk5QdkhAjnb5ijHpsQBV8zq94Q",
    authDomain: "react-drive-b7181.firebaseapp.com",
    projectId: "react-drive-b7181",
    storageBucket: "react-drive-b7181.appspot.com",
    messagingSenderId: "735735788831",
    appId: "1:735735788831:web:d3e88988d9775cdfbb2c2a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, storage, provider }
export default db
