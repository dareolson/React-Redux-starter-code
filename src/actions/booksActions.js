"use strict"
//post a book

export function postBooks(book) {
    return {
        type: "Post_Book",
        payload: book                
       }
  }



//delete books
export function deleteBooks(id){
	return{
		type: "Delete_book",
		payload: id
	}
}

export function updateBooks(book){
	return{
		type: "Update_book",
		payload: book
		}
	}


//update books