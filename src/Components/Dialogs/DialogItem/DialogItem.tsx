import React from "react";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../Dialogs";


const DialogItem = (props: DialogsType) => {
	 let path = '/dialogs/' + props.name
	 return <div>
			<NavLink to={path}>{props.name}</NavLink>
	 </div>
}
export default DialogItem