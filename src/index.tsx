import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {PostType} from "./Components/Profile/MyPosts/Posts/Post";
import {v1} from "uuid";

let posts: Array<PostType> = [
	 {id: v1(), message: 'How is it going man???', like: 25, dislike: 3},
	 {id: v1(), message: 'You are real dude!!!', like: 5, dislike: 2},
	 {id: v1(), message: 'Awesome', like: 10, dislike: 1},
]
ReactDOM.render(
	<BrowserRouter>
		 <App posts={posts}/>
	</BrowserRouter>,

	document.getElementById('root')
);