export type Post = {
	id: number;
	post_id: string;
  post_title: string;
};
export type LikePost = {
	id: number;
  user_id: string;
	post_id: string;
  post_title: string;
  post_content: string;
};
export type User = {
	email: string;
	password: string;
};