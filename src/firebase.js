import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyC6IH2RrCc8onvBzEzAv_Ojz4TwwU_p4kI",
    authDomain: "fun-food-friends-b5079.firebaseapp.com",
    databaseURL: "https://fun-food-friends-b5079.firebaseio.com",
    projectId: "fun-food-friends-b5079",
    storageBucket: "fun-food-friends-b5079.appspot.com",
    messagingSenderId: "565081785806",
    appId: "1:565081785806:web:cd2e4f2cb29b81e42e979f",
    measurementId: "G-NVZVFCT18M"
};

firebase.initializeApp(config);
export default firebase;