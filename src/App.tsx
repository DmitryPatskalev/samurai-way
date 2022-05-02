import React from 'react';
import './App.css'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
	 return (

		 <div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					 <Route path='/dialogs' component={Dialogs}/>
					 <Route path='/profile' component={Profile}/>
				</div>
		 </div>


	 );
}

export default App;
