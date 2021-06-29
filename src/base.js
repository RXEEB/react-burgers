import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5HZopfBvYT4f-RMkY_tOdEuUtdsSrdX0",
    authDomain: "react-burger-487ff.firebaseapp.com",
    databaseURL: "https://react-burger-487ff-default-rtdb.europe-west1.firebasedatabase.app",
  
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base
