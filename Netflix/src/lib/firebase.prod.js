import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAlYjNhj5gvteAj3eaqlNO8VJqF6q6uvBw",
    authDomain: "netflix-clone-ec762.firebaseapp.com",
    projectId: "netflix-clone-ec762",
    storageBucket: "netflix-clone-ec762.appspot.com",
    messagingSenderId: "404344426542",
    appId: "1:404344426542:web:b1a23268ad988c42bbcfbf"

};

const firebase = Firebase.initializeApp(config);



export { firebase };


