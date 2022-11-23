import { NextPageContext } from "next";
import React, { useContext, useEffect, useState } from "react";
import { getSortedPostsData, getPostData } from "../lib/posts";
import { useAuthContext } from "../useContext/useAuthContext";
interface Post{
	title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
	id :string
}
const home = (props: any) => {
	const context = useContext(useAuthContext); 
	
	return (
		<>
			{props.allPostsData.map((item: Post,index :string) => {
				return (
					<div key={index}>
						<p>Id : {item.id}</p>
						<p>Title : {item.title}</p>
					</div>
				);
			})}
		</>
	);
};
// export async function getServerSideProps(ctx?: NextPageContext) {
// 	const allPostsData = getSortedPostsData();
// 	console.log(allPostsData);
// 	// const postData = await getPostData();
// 	// console.log(postData);
// 	// const cookie = parseCookies(ctx);
//   // const cookieData: String = JSON.parse(cookie.id);
//   // const user = getCurrentUser(cookieData)
// 	return {
// 		props: {
// 			allPostsData,
// 		},
// 	};
// }
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
export default home;
