import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, StateType, updateNewPostText} from "./Redux/state";

export const rerenderIntireTree = (props: StateType) => {
	 ReactDOM.render(
		 <BrowserRouter>
				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		 </BrowserRouter>,
		 document.getElementById('root')
	 );
}
