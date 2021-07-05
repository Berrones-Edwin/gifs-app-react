import { firebase } from "../firebase/firebase";

export const registerWithUserAndPassword = ({ email, password }) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const loginWithUserAndPassword = ({ email, password }) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logoutUserFirebase = () => {
    return firebase.auth().signOut();
};
