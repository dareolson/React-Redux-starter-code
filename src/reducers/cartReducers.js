"use strict"

//cart reducers
export function cartReducers(state={cart:[]}, action){
	switch(action.type){
		case "Add_To_Cart":
		return{cart:[...state.cart, ...action.payload]}
		break;
	}
	return state;
}