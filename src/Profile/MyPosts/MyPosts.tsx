import React from "react";
import css from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
	 return <div className={css.textarea}>
			My Posts
			<div>
				 <textarea></textarea>
				 <button>Add post</button>
			</div>
			<div className={css.posts}>
				 <Post message='How is it going man???' like={25} dislike={3}/>
				 <Post message='You are real dude!!!' like={5} dislike={2}/>
				 <Post message='Awesome' like={10} dislike={1}/>
			</div>
	 </div>
}
export default MyPosts;