import React from "react";
import css from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessagesType} from "../../Redux/state";


type DialogsType = {
	 dialogs: DialogType[]
	 messages: MessagesType[]
}

const Dialogs = (props: DialogsType) => {

	 let dialogsElement = props.dialogs.map((elem, index) => {
			return <span key={index}>
				 <DialogItem name={elem.name} id={elem.id}/>
			</span>
	 })
	 let messagesElement = props.messages.map((elem, index) => {
			return <div>
				 <Message id={elem.id} message={elem.message}/>
			</div>


	 })

	 return <div className={css.dialogs}>
			<div className={css.dialogs_item}>
				 <div className={css.dialog}>
						{dialogsElement}
				 </div>
			</div>
			<div className={css.messages}>
				 <div className={css.message}>
						{messagesElement}
						<div>
							 <textarea></textarea>
							 <button>Send</button>
						</div>
				 </div>
			</div>

	 </div>
}
export default Dialogs