import React from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
	 return (

		 <div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					 <Route path='/dialogs' render={() => <Dialogs/>}/>
					 <Route path='/profile' render={() => <Profile/>}/>
				</div>
		 </div>


	 );
}

export default App;
