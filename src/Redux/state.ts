import {v1} from "uuid";


let rerenderEntireTree: (state: StateType) => void = () => {
}

export const subscribe = (callback: (state: StateType) => void) => {
	 rerenderEntireTree = callback
}

export type StateType = {
	 profilePage: ProfilePageType
	 dialogsPage: DialogsPageType
}

export type ProfilePageType = {
	 posts: PostsType[]
	 newPostText: string
}

export type DialogsPageType = {
	 dialogs: DialogType[]
	 messages: MessagesType[]
}

export type PostsType = {
	 id: string
	 message: string
	 like: number
	 dislike: number
}

export type DialogType = {
	 id: string
	 name: string
}
export type MessagesType = {
	 id: string
	 message: string
}

let state: StateType = {
	 profilePage: {
			posts: [
				 {id: v1(), message: 'How is it going man???', like: 25, dislike: 3},
				 {id: v1(), message: 'You are real dude!!!', like: 5, dislike: 2},
				 {id: v1(), message: 'Awesome', like: 10, dislike: 1},
			],
			newPostText: ''
	 },

	 dialogsPage: {
			dialogs: [
				 {id: v1(), name: 'Dima'},
				 {id: v1(), name: 'Tania'},
				 {id: v1(), name: 'Danik'},
				 {id: v1(), name: 'Ira'},
				 {id: v1(), name: 'Igor'},
				 {id: v1(), name: 'Julia'},
			],
			messages: [
				 {id: v1(), message: 'Hello dude!!!'},
				 {id: v1(), message: 'How are you today?'},
				 {id: v1(), message: 'Fine, thanks man!'},
			],

	 }
}


export let addPost = () => {
	 let newPost = {
			id: v1(),
			message: state.profilePage.newPostText,
			like: 5,
			dislike: 1
	 }
	 state.profilePage.posts.push(newPost)
	 rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
	 state.profilePage.newPostText = newText
	 rerenderEntireTree(state)
}

export default state