import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import React, { useContext, useRef } from "react";
import { StyledPost } from "../styles/StyledFrom";
import Router from "next/router";
import { useAuthContext } from "../useContext/useAuthContext";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { User } from "../lib/type";

const Signup = () => {
	const context = useContext(useAuthContext);
	const mailRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userInfo: User = {
			email: mailRef.current.value,
			password: passwordRef.current.value,
		};
		signInWithEmailAndPassword(auth, userInfo.email, userInfo.password).then(
			async (userCredential) => {
				// const user = userCredential.user;
				context?.updateIsLogin(true);
				Router.push("/");
			}
		);
	};
	return (
		<>
			<StyledPost>
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
							autoComplete="email"
						/>
					</div>
					<div>
						<label htmlFor='password'></label>
						<input
							type='password'
							ref={passwordRef}
							placeholder={"password"}
							id='password'
							autoComplete="current-password"
						/>
					</div>
					<div className='btnBox'>
						<button className='Btn'>Login</button>
						<Link href='/signup'>
							<button className='Btn'>Create account</button>
						</Link>
					</div>
				</form>
			</StyledPost>
		</>
	);
};

// export const getServerSideProps: GetServerSideProps = async (context) => {

// 	const user =await  pg.query("SELECT * FROM likes")
// 	console.log("hey",user);

// 	return {
// 		props: {
// 			initialContacts: "",
// 		},
// 	};
// };
export default Signup;
