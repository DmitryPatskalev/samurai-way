import React from "react";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/state";


const DialogItem = (props: DialogType) => {
	 let path = '/dialogs/' + props.name
	 return <div>
			<NavLink to={path}>{props.name}</NavLink>
	 </div>
}
export default DialogItem