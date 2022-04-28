import React from "react";
import css from './Navbar.module.css'

const Navbar = () => {
		return <div className={css.nav}>
				<div className={css.item}><a href=''>Profile</a></div>
				<div className={css.item}><a href=''>Message</a></div>
				<div className={css.item}><a href=''>News</a></div>
				<div className={css.item}><a href=''>Music</a></div>
				<div className={css.item}><a href=''>Settings</a></div>
		</div>

}
export default Navbar;