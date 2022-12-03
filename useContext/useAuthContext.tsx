import React, {
	createContext,
	ReactNode,
	useEffect,
	useState,
} from "react";
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
					setUser(user);
					return setIsLogin(true);
				} else {
					Router.push("/login");
				}
			});
		};
		fetchData();
	}, []);
	return (
		<useAuthContext.Provider
			value={{ isLogin, updateIsLogin, user, updateUser }}
		>
			{isLogin && <Header />}
			{children}
		</useAuthContext.Provider>
	);
};
export default ContextAuth;
