import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase";
export const login = (userInfo: { email:string, password : string}) => {
	signInWithEmailAndPassword(auth, userInfo.email, userInfo.password).then(
		(userCredential) => {
			const user = userCredential.user;
			console.log(user);
		}
  );
};
export const getCurrentUser = () => {

  // const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
      const uid = user.uid;
      return user
			// ...
		} 
	});
}