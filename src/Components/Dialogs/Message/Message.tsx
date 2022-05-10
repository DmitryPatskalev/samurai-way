import React from "react";
import {MessageType} from "../Dialogs";

const Message = (props: MessageType) => {
	 return <div>
			{props.message}
	 </div>
}
export default Message