import React from "react";
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	 return <div className={css.nav}>
			<div className={css.item}>
				 <div><NavLink to='/profile'>Profile</NavLink></div>
				 <div><NavLink to='/dialogs'>Message</NavLink></div>
				 <div><NavLink to='/news'>News</NavLink></div>
				 <div><NavLink to='/music'>Music</NavLink></div>
				 <div><NavLink to='/settings'>Settings</NavLink></div>
			</div>
	 </div>

}
export default Navbar;