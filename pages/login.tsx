import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import React, { useContext, useRef } from "react";
import { FormStyled } from "../styles/StyleFrom";
import Router from "next/router";
import { useAuthContext } from "../useContext/useAuthContext";
interface User {
  email: string;
  password: string;
}
const Signup = () => {
  const context = useContext(useAuthContext)
	const mailRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userInfo: User = {
			email: mailRef.current.value,
			password: passwordRef.current.value,
		};
		console.log(userInfo);
		signInWithEmailAndPassword(auth, userInfo.email, userInfo.password).then(
			async (userCredential) => {
				const user = userCredential.user;
        console.log(user);
        context?.updateIsLogin(true)
        Router.push("/home");
			}
		);
  };
	return (
		<>
			<FormStyled>
				<form onSubmit={(e) => handleSubmit(e)}>
					<h2>Login</h2>
					<div>
						{/* {<p className='errMsg'>This Email dosen't exsit</p>} */}
						<label htmlFor='email'></label>
						<input
							type='email'
							id='email'
							ref={mailRef}
							placeholder={"email"}
						/>
					</div>
					<div>
						<label htmlFor='password'></label>
						<input
							type='password'
							ref={passwordRef}
							placeholder={"password"}
							id='password'
						/>
					</div>
					<div className='btnBox'>
						<button className='Btn'>Login</button>
						<button className='Btn'>Create Account</button>
					</div>
				</form>
			</FormStyled>
		</>
	);
};

export default Signup;
