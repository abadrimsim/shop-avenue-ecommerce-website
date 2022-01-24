import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCsPQ4_keOAC6-wqc7LjSVHST3hnEdlhk8',
	authDomain: 'shop-avenue-e295a.firebaseapp.com',
	projectId: 'shop-avenue-e295a',
	storageBucket: 'shop-avenue-e295a.appspot.com',
	messagingSenderId: '943713888110',
	appId: '1:943713888110:web:c0ae2c2a38a80cd621437f',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export default db;
