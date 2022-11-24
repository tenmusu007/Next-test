import React, {
	Children,
	createContext,
	ReactNode,
	useEffect,
	useState,
} from "react";
import { getCurrentUser } from "../firebase/getUser";
import Header from "../components/Header";
import { auth } from "../firebase/firebase";
import Router from "next/router";

import { onAuthStateChanged } from "firebase/auth";
interface children {
	children: ReactNode;
}
interface contextInterface {
	isLogin: boolean;
	updateIsLogin: (item: boolean) => void;
	user: any;
	updateUser: (item: any) => void;
}
export const useAuthContext = createContext<contextInterface | null>(null);
const ContextAuth = ({ children }: children) => {
	const [user, setUser] = useState<any>("");

	const [isLogin, setIsLogin] = useState<boolean>(false);
	const updateIsLogin = (login: boolean) => {
		setIsLogin(login);
	};
	const updateUser = (login: any) => {
		setUser(login);
	};
	useEffect(() => {
		const fetchData = async () => {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// console.log("auth", user.email);
					setUser(user);
					// if (user !== undefined) {
					// 	console.log("login");
						return setIsLogin(true);
					// } else {
					// 	console.log("not login");
					// 	Router.push("/signup");
					// }
				} else {
					Router.push("/signup");
					
				}
			});
		};
		fetchData();
	}, []);
	return (
		<useAuthContext.Provider
			value={{ isLogin, updateIsLogin, user, updateUser }}
		>
			<Header />
			{children}
		</useAuthContext.Provider>
	);
};
export default ContextAuth;
