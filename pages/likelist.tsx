import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { LikePost, Post} from "../lib/type";
import { useAuthContext } from "../useContext/useAuthContext";
import { auth } from "../firebase/firebase";
import { PostStyled } from "../styles/StyledPost"
const LikeList = () => {
  const [likeList, setLikeList] = useState<any>([])
	const context = useContext(useAuthContext); 

  
	useEffect(() => {
		const fetchData = async () => {
			await axios.get("/api/getLike").then((res) => {
        // console.log("getlike", res.data);
        onAuthStateChanged(auth, (user) => {
					if (user) {
						const uid = user.uid;
						const filter = res.data.filter((item: LikePost) => {	
              if (uid === item.user_id) {
                return item;
              }
						});						
              setLikeList(filter);
					}
				});
			});
		};
		fetchData();
	}, []);
	return (
		<PostStyled>
			<h2>My Favorite Posts</h2>
			{
				likeList.map((item: LikePost, index: number) => {
				return (
					<div key={index} className='postContainer'>
						<p>Title : {item.post_title}</p>
						<div dangerouslySetInnerHTML={{ __html: item.post_content }} />
					</div>
				);
			})}
		</PostStyled>
	);
};

export default LikeList;
