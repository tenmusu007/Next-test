import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { LikePost, Post } from "../lib/type";
import { useAuthContext } from "../useContext/useAuthContext";
import { auth } from "../firebase/firebase";
import { PostStyled } from "../styles/StyledPost";
const LikeList = () => {
	const [likeList, setLikeList] = useState<LikePost[]>([]);	
	const [likedPost, setLikedPost] = useState<boolean>(false);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			const fetchData = async (user: any) => {
			const uid = user.uid
				await axios.post("/api/getLike", { user_id: uid }).then((res) => {
				if (res.data.length < 1) return setLikedPost(false);
				setLikedPost(true);
					setLikeList(res.data);
				});
			};
			if (user) {
				fetchData(user);
			}
		});
	}, []);
	return (
		<PostStyled>
			<h2>My Favorite Posts</h2>
			{likedPost ? (
				likeList.map((item: LikePost, index: number) => {
					return (
						<div key={index} className='postContainer'>
							<p>Title : {item.post_title}</p>
							<div dangerouslySetInnerHTML={{ __html: item.post_content }} />
						</div>
					);
				})
			) : (
				<h3>No Like</h3>
			)}
		</PostStyled>
	);
};

export default LikeList;
