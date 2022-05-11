import React from "react";
import css from './MyPosts.module.css'
import Post from "./Posts/Post";
import {v1} from 'uuid'
import {PostsType} from "../../../index";

type MyPostsType = {
	 posts: PostsType[]
}

const MyPosts = (props: MyPostsType) => {

	 let postsElement = props.posts.map((elem, index) => {
			return <div key={index}>
				 <Post id={v1()} message={elem.message} like={elem.like} dislike={elem.dislike}/>
			</div>
	 })

	 return <div className={css.textarea}>
			<h3>My Posts</h3>
			<div>
				 <textarea></textarea>
				 <div>
						<button>Add post</button>
				 </div>
			</div>
			<div className={css.posts}>
				 {postsElement}
			</div>
	 </div>
}
export default MyPosts;