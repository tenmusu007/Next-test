import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { getSortedPostsData, getPostData } from "../lib/posts";
import { useAuthContext } from "../useContext/useAuthContext";
import { PostStyled } from "../styles/StyledPost";

type Post ={
	contentHtml: string;
	date: string;
	id: string;
	title: string;
};
type Like = {
	id: any;
	user_id: string;
	post_id: string;
	post_title: string;
	post_content: string;
};
const Home = (props: any) => {
	const context = useContext(useAuthContext);
	// console.log("props", props.postInfo);

	const [likeCount, setLikeCount] = useState<number>(0);

	useEffect(() => {
		const fetchData = async () => {
			const count: any = {};
			await axios.get("/api/getLike").then((res) => {
				// console.log("getlike", res.data);
				// res.data.forEach((item: Like) => {
				// 	count['test'] = (count[item.post_id] || 0) + 1;
				// });
				// console.log("forEach", count);
			});
			// setLikeCount(count);
		};
		fetchData();
	}, []);
	const handleClikc = (e: Post) => {
		const data: Like = {
			user_id: context?.user.uid,
			post_id: e.id,
			post_title: String(e.title),
			post_content: e.contentHtml,
			id: undefined,
		};
		axios.post("/api/postLike", { data: data }).then((res) => {
		});
	};
	return (
		<>
			<PostStyled>
				<h2>Home</h2>
				{props.postInfo.map((item: any, index: string) => {
					return (
						<div key={index} className='postContainer'>
							<h3>{item.title}</h3>
							<div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
							<button onClick={(e) => handleClikc(item)}>Like</button>
						</div>
					);
				})}
			</PostStyled>
		</>
	);
};
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const postInfo = [];
	for (const item of allPostsData) {
		const content = await getPostData(item.id);
		postInfo.push(content);
	}
	
	return {
		props: {
			postInfo,
		},
	};
}
export default Home;
