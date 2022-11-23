import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import React, { useRef } from "react";
import { FormStyled } from "../styles/StyleFrom";

const Signup = () => {
	interface User {
		email: string;
		password: string;
	}
	const mailRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const userInfo: User = {
			email: mailRef.current.value,
			password: passwordRef.current.value,
		};
		console.log(userInfo);
		createUserWithEmailAndPassword(
			auth,
			userInfo.email,
			userInfo.password
		).then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		});
  };
  return (
		<>
			<FormStyled>
				<form onSubmit={(e) => handleSubmit(e)}>
					<h2>SignUp</h2>
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
