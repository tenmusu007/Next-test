import React, {
	Children,
	createContext,
	ReactNode,
useEffect,
	useState,
} from "react";
import { getCurrentUser } from "../firebase/getUser";
import Header from "../components/Header"
import { auth } from "../firebase/firebase";

import { onAuthStateChanged } from "firebase/auth";
interface children {
	children: ReactNode;
}
interface contextInterface {
	isLogin: boolean;
	updateIsLogin: (item: boolean) => void;
	user: string;
	updateUser: (item: string) => void;
}
export const useAuthContext = createContext<contextInterface | null>(null);
const ContextAuth = ({ children }: children) => {
	const [user, setUser] = useState<any>("")
	
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const updateIsLogin = (login:boolean) => {
    setIsLogin(login)
  }
  const updateUser = (login:string) => {
    setUser(login);
  }
  useEffect(() => {
    const fetchData = async () => {
    	onAuthStateChanged(auth, (user) => {
				if (user) {
          const uid = user.uid;
          console.log("auth", user.email);   
					setUser(user.email)
					if (user !== undefined) return setIsLogin(true);
				}
			});
    }
    fetchData()
		}, []);
  return (
		<useAuthContext.Provider
			value={{ isLogin, updateIsLogin, user, updateUser }}
		>
			<Header />
			{children}
		</useAuthContext.Provider>
	);
}
export default ContextAuth;