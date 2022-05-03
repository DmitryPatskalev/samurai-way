import logo from "../Photo/CoatOfArms.jpg";
import React from "react";
import css from './Header.module.css'

const Header = () => {
	 return <div className={css.header}>
			<img className={css.logo} src={logo} alt='logo'/>
	 </div>

}
export default Header;