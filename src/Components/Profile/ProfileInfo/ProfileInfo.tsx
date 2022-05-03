import React from "react";
import css from './ProfileInfo.module.css'
import stadium from './../../Photo/stadium.jpg'

const ProfileInfo = () => {
	 return <div>
			<img className={css.stadium} src={stadium} alt='stadium'/>
			<div className={css.description}>
				 ava + description
			</div>
	 </div>
}
export default ProfileInfo