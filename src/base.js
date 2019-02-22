import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDGlNb57LLcgU2czKRUjH55y4c1u9i__w4',
	authDomain: 'catch-of-the-day-majd-issa.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-majd-issa.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

export default base;
