import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
	 return <div className={css.dialogs}>
			<div className={css.dialogs_item}>
				 <div className={css.dialog}>
						<div><NavLink to='/dialogs/dima'>Dima</NavLink></div>
						<div><NavLink to='/dialogs/tania'>Tania</NavLink></div>
						<div><NavLink to='/dialogs/danik'>Danik</NavLink></div>
						<div><NavLink to='/dialogs/ira'>Ira</NavLink></div>
						<div><NavLink to='/dialogs/igor'>Igor</NavLink></div>
						<div><NavLink to='/dialogs/julia'>Julia</NavLink></div>
				 </div>
			</div>
			<div className={css.messages}>
				 <div className={css.message}>
						<div>Hello dude!!!</div>
						<div>How are you today?</div>
						<div>Fine, thanks man!</div>
				 </div>
			</div>
	 </div>
}
export default Dialogs