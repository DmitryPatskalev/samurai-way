import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

export type PostsType = {
	 id: string
	 message: string
	 like: number
	 dislike: number
}

export type DialogType = {
	 id: string
	 name: string
}
export type MessagesType = {
	 id: string
	 message: string
}

let posts: Array<PostsType> = [
	 {id: v1(), message: 'How is it going man???', like: 25, dislike: 3},
	 {id: v1(), message: 'You are real dude!!!', like: 5, dislike: 2},
	 {id: v1(), message: 'Awesome', like: 10, dislike: 1},
]

let dialogs: Array<DialogType> = [
	 {id: v1(), name: 'Dima'},
	 {id: v1(), name: 'Tania'},
	 {id: v1(), name: 'Danik'},
	 {id: v1(), name: 'Ira'},
	 {id: v1(), name: 'Igor'},
	 {id: v1(), name: 'Julia'},
]
let messages: Array<MessagesType> = [
	 {id: v1(), message: 'Hello dude!!!'},
	 {id: v1(), message: 'How are you today?'},
	 {id: v1(), message: 'Fine, thanks man!'},
]
ReactDOM.render(
	<BrowserRouter>
		 <App posts={posts} dialogs={dialogs} messages={messages}/>
	</BrowserRouter>,

	document.getElementById('root')
);