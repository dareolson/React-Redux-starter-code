"use strict"

	//Books reducers
export function booksReducers(state = {
	books:
	[{
		id: 1,
		title: 'this is It',
		description: 'Buttfuckers',
		price: 63
	},
	{
		id: 2,
		title: 'Oysters with clam sauce',
		description: 'bangers and mash',
		price: 80
	}]
}, action){
	switch(action.type){
		case "Get_Books":
		// let books = state.books.concat(action.payload);
		return {...state, books:[...state.books]}
		break;
		case "Delete_Book":
		//create a copy of the current array of books
		const currentBookToDelete = [...state.books]
		//determine at which index in books array is the book to be deleted
		const indexToDelete = currentBookToDelete.findIndex(function(book){
			return book.id === action.payload.id;
		}
	)
		//use slice to remove the book at the specified index
		return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete +1)]}
		break;
		case "Update_Book":
		//create a copy of the current array of books
		const currentBookToUpdate = [...state.books]
		//determine at which index in books array is the book to be deleted
		const indexToUpdate = currentBookToUpdate.findIndex(function(book){
			return book.id === action.payload.id;
		})
	//create a new book object with the new values and with thte same array index of the item we want to replace. To achieve this we will use ..spread but we could use concat methods too
		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate],
			title: action.payload.title
		}
		//show you how newBookUpdate looks
		console.log("what is it newBookToUpdate");
		//use slice to remove the book at the specified Index, replace with the new object and concatenate with the rest of the items in the array
		return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate +1)]}
		break;

	}
	return state
}