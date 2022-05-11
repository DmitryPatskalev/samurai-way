import css from './Post.module.css'
import avatar from '../../../Photo/kitty.jpg'
import React from "react";
import like from '../../../Photo/Like.jpg'
import dislike from '../../../Photo/Dislike.jpg'


export type PostType = {
	 id: string
	 message: string
	 like: number
	 dislike: number
}

const Post: React.FC<PostType> = (props) => {
	 return <div className={css.item}>
			<img className={css.avatar} src={avatar} alt='avatar'/>
			{props.message}
			<div>
						<span>
								<img src={like} alt='like' className={css.like}/>{props.like}
							 <img src={dislike} alt='like' className={css.like}/>{props.dislike}
						</span>
			</div>
	 </div>

}
export default Post;