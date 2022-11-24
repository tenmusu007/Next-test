import styled from "styled-components";

export const StyledPost = styled.section`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	height: 50vh;
	margin: 0 auto;
	a {
		color: black;
		text-decoration: none;
		:hover {
			color: white;
		}
	}
	border-radius: 20px;
	.errMsg {
		color: #f94b68;
		font-size: 1rem;
		font-weight: 400;
	}
	input {
		margin: 10px 0;
		border: black;
		font-size: 15px;
		border-radius: 10px;
		padding: 10px;
		:focus {
			border: none;
		}
	}
	.inputText {
		padding: 10px;
	}
	.btnBox {
		/* display: flex;
		justify-content: space-between; */

		.Btn {
			margin: 20px 0;
			border: none;
			background-color: white;
			padding: 10px;
			font-size: 15px;
			border-radius: 10px;
			:hover {
				background-color: black;
				color: white;
			}
		}
	}
`;
