import { auth } from "../firebase/firebase";
import { ReactElement, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Router from "next/router";
import { useAuthContext } from "../useContext/useAuthContext";
import Link from "next/link";
const Like =styled.p`
	
`
const HeaderStyled = styled.header`
	.headerContainer {
		display: felx;
		align-items: center;
		justify-content: end;
		.loginUser {
			padding-right: 10px;
		}
		.Link {
			a {
				padding: 0 10px;
				text-decoration: none;
				color: black;
				:hover {
					color: lightblue;
				}
			}
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
	.currentUser {
		.loginUser {
			text-align: end;
			margin: 0;
			margin-bottom: 50px;
			padding: 0 10px;
		}
	}
`;
type LayoutProps = Required<{
	readonly children: ReactElement;
}>;
const Header = () => {
	const context = useContext(useAuthContext);
	const handleLogin = () => {
		auth.signOut().then(() => {
			context?.updateIsLogin(false);
			context?.updateUser("");
			Router.push("/login");
		});
	};
	return (
		<>
			<HeaderStyled>
				<div className='headerContainer'>
					<Like></Like>
					<p className='Link'>
						<Link href='/'>home</Link>
					</p>
					<p className='Link'>
						<Link href='/likelist'>LikeList</Link>
					</p>
					{context?.isLogin ? (
						<button onClick={handleLogin}>logout</button>
					) : (
						<button onClick={handleLogin}>login</button>
					)}
				</div>
					<div className="currentUser">
						<p className='loginUser'>user {context?.user.email}</p>
					</div>
			</HeaderStyled>
		</>
	);
};

export default Header;
