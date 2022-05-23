import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../Redux/state";

type ProfileType = {
	 posts: PostsType[]
	 addPost: (postMessage: string) => void
	 updateNewPostText: (newText: string) => void

}

const Profile = (props: ProfileType) => {
	 return <div>
			<ProfileInfo/>
			<MyPosts
				posts={props.posts}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}

			/>
	 </div>

}
export default Profile;