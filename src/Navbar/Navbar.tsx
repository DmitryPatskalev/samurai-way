import React from "react";
import css from './Navbar.module.css'

const Navbar = () => {
		return <div className={css.nav}>
				<div className={css.item}><a>Profile</a></div>
				<div className={css.item}><a>Message</a></div>
				<div className={css.item}><a>News</a></div>
				<div className={css.item}><a>Music</a></div>
				<div className={css.item}><a>Settings</a></div>
		</div>

}
export default Navbar;