import React from "react";
import css from './MyPosts.module.css'
import Post from "./Posts/Post";
import {v1} from 'uuid'
import {PostsType} from "../../../Redux/state";

type MyPostsType = {
	 posts: PostsType[]
	 addPost: (message: string) => void
	 updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

	 let postsElement = props.posts.map((elem, index) => {
			return <div key={index}>
				 <Post id={v1()} message={elem.message} like={elem.like} dislike={elem.dislike}/>
			</div>
	 })
	 let newPostElement = React.createRef<HTMLTextAreaElement>()
	 const addMessage = () => {
			if (newPostElement.current) {
				 props.addPost(newPostElement.current.value)
				 newPostElement.current.value = ''
			}
	 }
	 const onPostChange = () => {
			if (newPostElement.current) {
				 props.updateNewPostText('')
			}
	 }

	 return <div className={css.textarea}>
			<h3>My Posts</h3>
			<div>
				 <textarea ref={newPostElement} onChange={onPostChange}></textarea>
				 <div>
						<button onClick={addMessage}>Add post</button>
				 </div>
			</div>
			<div className={css.posts}>
				 {postsElement}
			</div>
	 </div>
}
export default MyPosts;