import React from "react";
import css from './Dialogs.module.css'
import {v1} from "uuid";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


export type DialogsType = {
	 id: string
	 name: string
}
export type MessageType = {
	 id: string
	 message: string
}

const Dialogs = () => {
	 let dialogs: Array<DialogsType> = [
			{id: v1(), name: 'Dima'},
			{id: v1(), name: 'Tania'},
			{id: v1(), name: 'Danik'},
			{id: v1(), name: 'Ira'},
			{id: v1(), name: 'Igor'},
			{id: v1(), name: 'Julia'},
	 ]
	 let messages: Array<MessageType> = [
			{id: v1(), message: 'Hello dude!!!'},
			{id: v1(), message: 'How are you today?'},
			{id: v1(), message: 'Fine, thanks man!'},
	 ]
	 let dialogsElement = dialogs.map((elem, index) => {
			return <span key={index}>
				 <DialogItem name={elem.name} id={elem.id}/>
			</span>
	 })
	 let messagesElement = messages.map((elem, index) => {
			return <Message id={elem.id} message={elem.message}/>
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
				 </div>
			</div>
	 </div>
}
export default Dialogs