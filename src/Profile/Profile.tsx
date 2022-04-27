import stadium from "../Photo/stadium.jpg";
import React from "react";
import css from './Profile.module.css'

const Profile = () => {
		return <div className={css.content}>
				<div>
						<img className={css.stadium} src={stadium} alt='stadium'/>
				</div>
				<div>
						ava + description
				</div>
				<div>
						My Posts
						<div>
								New Posts
						</div>
						<div>
								<div>
										Post 1
								</div>
								<div>
										Post 2
								</div>
						</div>
				</div>
		</div>

}
export default Profile;