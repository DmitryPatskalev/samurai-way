import React from "react";
import {MessagesType} from "../../../Redux/state";


const Message = (props: MessagesType) => {
	 return <div>
			{props.message}
	 </div>
}
export default Message