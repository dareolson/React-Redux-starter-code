"use strict"

//add to cart
export function addToCart(book){
	return{
		type: "Add_to_Cart",
		payload: book

	}
}