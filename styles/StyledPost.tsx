import styled, { keyframes } from "styled-components";
const AlertAnime = keyframes`
	0% { transform: translateX(100px); opacity: 0; }
	25% { transform: translateX(0px); opacity: 1;};
	75% { transform: translateX(0px); opacity: 1;};
	100% { transform: translateX(100px); opacity: 0;};
`;
export const PostStyled = styled.section`
	h2 {
		text-align: center;
	}
	h3 {
		text-align: center;
	}
	.postContainer {
		width: 80%;
		margin: 0 auto;
	}
	.btn {
		border: solid 1px black ;
		background-color: white;
		color: black;
		padding: 5px 20px;
		border-radius: 10px;
		:hover{
			background-color: lightpink;
		}
	}
	.likeddBtn {
		background-color: lightblue;
		/* opacity: 50%; */
		text-align: center;
		position: fixed;
		width: 150px;
		height: 30px;
		color: black;
		bottom: 25px;
		right: 25px;
		border-radius: 10px;
		animation: ${AlertAnime} 5s ease-in-out forwards;

		p {
			margin: 0;
			margin-top: 3px;
		}
	}
`;
