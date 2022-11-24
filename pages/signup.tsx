import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import React, { useEffect, useRef, useState } from "react";
import { StyledPost } from "../styles/StyledFrom";
import Router from "next/router";
import { User } from "../lib/type";


const SignUp = () => {
	const mailRef = useRef<HTMLInputElement>(null!);
	const passwordRef = useRef<HTMLInputElement>(null!);
	const passwordConfirmRef = useRef<HTMLInputElement>(null!);
	const [errMsg, setErrMsg] = useState<boolean>(false);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(passwordRef.current.value);

		if (
			/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,20}$/.test(
				passwordRef.current.value
			)
		) {
			console.log("pass", passwordRef.current.value);
			console.log("pass2", passwordConfirmRef.current.value);

			if (passwordRef.current.value !== passwordConfirmRef.current.value)
				return setErrMsg(true);
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
				Router.push("/");

			});
		} else {
			console.log("password is not matched")
			setErrMsg(true);
		}
	};
	return (
		<>
			<StyledPost>
				<form onSubmit={(e) => handleSubmit(e)}>
					<h2>SignUp</h2>
					<div>
						{errMsg && <p className='errMsg'>Password is worng</p>}
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
					<div>
						<label htmlFor='password'></label>
						<input
							type='password'
							ref={passwordConfirmRef}
							placeholder={"password"}
							id='password'
						/>
					</div>
					<div className='btnBox'>
						{/* <button className='Btn'>Login</button> */}
						<button className='Btn'>
							Create Account
						</button>
					</div>
				</form>
			</StyledPost>
		</>
	);
};

export default SignUp;
