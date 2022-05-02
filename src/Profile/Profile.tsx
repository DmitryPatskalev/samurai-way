import stadium from "../Photo/stadium.jpg";
import React from "react";
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	 return <div>
			<div>
				 <img className={css.stadium} src={stadium} alt='stadium'/>
			</div>
			<div className={css.description}>
				 ava + description
			</div>
			<MyPosts/>
	 </div>

}
export default Profile;