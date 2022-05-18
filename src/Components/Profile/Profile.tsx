import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../Redux/state";

type ProfileType = {
	 posts: PostType[]
	 addPost: (message: string) => void

}

const Profile = (props: ProfileType) => {
	 return <div>
			<ProfileInfo/>
			<MyPosts posts={props.posts} addPost={props.addPost}/>
	 </div>

}
export default Profile;