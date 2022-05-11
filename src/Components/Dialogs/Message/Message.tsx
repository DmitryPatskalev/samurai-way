import React from "react";
import {MessagesType} from "../../../index";


const Message = (props: MessagesType) => {
	 return <div>
			{props.message}
	 </div>
}
export default Message