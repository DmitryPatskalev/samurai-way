import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DialogType, MessagesType, PostsType} from './index'

type AppType = {
	 posts: PostsType[]
	 dialogs: DialogType[]
	 messages: MessagesType[]
}

function App(props: AppType) {
	 return (

		 <div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					 <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
					 <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
				</div>
		 </div>
	 );
}

export default App;
