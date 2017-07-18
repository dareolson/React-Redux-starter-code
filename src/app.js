"use strict"

//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//import combined reducers
import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';


// step 1: create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


// store.subscribe(function(){
// 	console.log('current state is: ', store.getState());
	// console.log('current price: ', store.getState()[1].price);
// })
import BooksList from './components/pages/booksList';

render(
	<Provider store = {store}>
		<BooksList />
	</Provider>, document.getElementById('app')
);

//step 2: create and dispatch the actions
store.dispatch(postBooks(
	[{
		id: 1,
		title: 'this is It',
		description: 'Buttfuckers',
		price: 33
	},
	{
		id: 2,
		title: 'Oysters with clam sauce',
		description: 'bangers and mash',
		price: 50
	}]
)) 

//delete a book

store.dispatch(deleteBooks(
	{
		id: 1,
	}	
))


//update a book
store.dispatch(updateBooks(
	{
		id: 2,
		title: 'Whatever bubs'
	}
	))

//-->>Cart Actions<<--
// Add to cart
store.dispatch(addToCart([{id:1}]))
