import React from "react";
import css from './MyPosts.module.css'
import Post, {PostType} from "./Posts/Post";
import {v1} from 'uuid'


const MyPosts = () => {
	 let posts: Array<PostType> = [
			{id: v1(), message: 'How is it going man???', like: 25, dislike: 3},
			{id: v1(), message: 'You are real dude!!!', like: 5, dislike: 2},
			{id: v1(), message: 'Awesome', like: 10, dislike: 1},
	 ]

	 let postsElement = posts.map((elem, index) => {
			return <div key={index}>
				 <Post message={elem.message} like={elem.like} dislike={elem.dislike}/>
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