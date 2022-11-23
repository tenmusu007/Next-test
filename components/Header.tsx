import { auth } from "../firebase/firebase";
import { ReactElement, useEffect, useState,useContext } from "react";
import styled from "styled-components";
import { getCurrentUser } from "../firebase/getUser";
import Router from "next/router";
import ContextAuth from "../useContext/useAuthContext";
import { useAuthContext } from "../useContext/useAuthContext";
const HeaderStyled = styled.header`
	.headerContainer {
		display: felx;
		align-items: center;
		justify-content: end;
		.loginUser {
			padding-right: 10px;
		}
		button {
			margin: 20px 0;
			border: none;

			background-color: white;
			color: black;
			padding: 10px;
			font-size: 15px;
			border-radius: 10px;
			:hover {
				background-color: red;
				color: white;
			}
		}
	}
`;
type LayoutProps = Required<{
	readonly children: ReactElement;
}>;
const Header = () => {
	const context = useContext(useAuthContext);
	console.log(context?.user);
	
	const handleLogin = () => {
		auth.signOut().then(() => {
			context?.updateIsLogin(false)
			context?.updateUser("")
			Router.push("/login");
		});
	};
	return (
		<>
				<HeaderStyled>
					<div className='headerContainer'>
					<p className='loginUser'>user {context?.user}</p>
						{context?.isLogin ? (
							<button onClick={handleLogin}>logout</button>
						) : (
							<button onClick={handleLogin}>login</button>
						)}
					</div>
				</HeaderStyled>
		</>
	);
};

export default Header;
