import state, {addPost, StateType, subscribe, updateNewPostText} from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state: StateType) => {

	 ReactDOM.render(
		 <BrowserRouter>
				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		 </BrowserRouter>,
		 document.getElementById('root')
	 );
}
rerenderEntireTree(state)

subscribe(rerenderEntireTree)



