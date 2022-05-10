import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";


type DialogsDataType = {
	 id: string
	 name: string
}
type MessageDataType = {
	 id: string
	 message: string
}


const Dialogs = () => {
	 let dialogs: Array<DialogsDataType> = [
			{id: v1(), name: 'Dima'},
			{id: v1(), name: 'Tania'},
			{id: v1(), name: 'Danik'},
			{id: v1(), name: 'Ira'},
			{id: v1(), name: 'Igor'},
			{id: v1(), name: 'Julia'},
	 ]
	 let messages: Array<MessageDataType> = [
			{id: v1(), message: 'Hello dude!!!'},
			{id: v1(), message: 'How are you today?'},
			{id: v1(), message: 'Fine, thanks man!'},
	 ]
	 let dialogsElement = dialogs.map((elem, index) => {
			return <div key={index}>
				 <NavLink to={'/dialogs/' + elem.name}>{elem.name}</NavLink>
			</div>
	 })
	 let messagesElement = messages.map((elem, index) => {
			return <div key={index}>{elem.message}</div>
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