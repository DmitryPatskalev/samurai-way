import React from "react";
import css from './MyPosts.module.css'
import Post, {PostType} from "./Posts/Post";
import {v1} from 'uuid'

type PostsElementType = {
	 posts: PostType[]
}

const MyPosts: React.FC<PostsElementType> = (props) => {

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