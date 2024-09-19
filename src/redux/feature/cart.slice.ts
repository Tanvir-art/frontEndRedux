// // cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     items: [],  // Array of product objects in the cart
//     totalQuantity: 0,  // Total number of items in the cart
//     totalPrice: 0,  // Total price of the items in the cart
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             const newItem = action.payload;
//             const existingItem = state.items.find(item => item.id === newItem.id);

//             if (existingItem) {
//                 existingItem.quantity++;
//                 existingItem.totalPrice += newItem.price;
//             } else {
//                 state.items.push({
//                     ...newItem,
//                     quantity: 1,
//                     totalPrice: newItem.price,
//                 });
//             }
//             state.totalQuantity++;
//             state.totalPrice += newItem.price;
//         },
//         updateCart(state, action) {
//             const { id, quantity } = action.payload;
//             const existingItem = state.items.find(item => item.id === id);

//             if (existingItem) {
//                 const difference = quantity - existingItem.quantity;
//                 existingItem.quantity = quantity;
//                 existingItem.totalPrice = existingItem.price * quantity;

//                 state.totalQuantity += difference;
//                 state.totalPrice += difference * existingItem.price;
//             }
//         },
//         removeFromCart(state, action) {
//             const id = action.payload;
//             const existingItem = state.items.find(item => item.id === id);

//             if (existingItem) {
//                 state.totalQuantity -= existingItem.quantity;
//                 state.totalPrice -= existingItem.totalPrice;
//                 state.items = state.items.filter(item => item.id !== id);
//             }
//         },
//     },
// });

// export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

// =====================================

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCart, updateCart, removeFromCart } from './cartSlice';

// const ProductList = ({ products }) => {
//     const cart = useSelector(state => state.cart);
//     const dispatch = useDispatch();

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product));
//     };

//     const handleUpdateCart = (id, quantity) => {
//         dispatch(updateCart({ id, quantity }));
//     };

//     const handleRemoveFromCart = (id) => {
//         dispatch(removeFromCart(id));
//     };

//     return (
//         <div>
//             <h2>Products</h2>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                         <button onClick={() => handleUpdateCart(product.id, newQuantity)}>Update Quantity</button>
//                         <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
//                     </li>
//                 ))}
//             </ul>

//             <h2>Cart</h2>
//             <ul>
//                 {cart.items.map(item => (
//                     <li key={item.id}>
//                         {item.name} - ${item.price} x {item.quantity} = ${item.totalPrice}
//                         <button onClick={() => handleUpdateCart(item.id, newQuantity)}>Update</button>
//                         <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//                     </li>
//                 ))}
//             </ul>
//             <div>Total Quantity: {cart.totalQuantity}</div>
//             <div>Total Price: ${cart.totalPrice}</div>
//         </div>
//     );
// };

// export default ProductList;

// export async function fetchAllItems() {
//     const response = await fetch('/api/items');
//     return response.json();
//   }

//   export async function fetchItemById(id) {
//     const response = await fetch(`/api/items/${id}`);
//     return response.json();
//   }

//   export async function createNewItem(data) {
//     const response = await fetch('/api/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }

//   export async function updateItem(id, data) {
//     const response = await fetch(`/api/items/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }

//   export async function deleteItem(id) {
//     const response = await fetch(`/api/items/${id}`, {
//       method: 'DELETE',
//     });
//     return response.json();
//   }

// pages/index.js

// import { useState, useEffect } from 'react';
// import { fetchAllItems, createNewItem, updateItem, deleteItem } from '../services/api';

// export default function Home() {
//   const [items, setItems] = useState([]);
//   const [currentItem, setCurrentItem] = useState({ name: '' });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     loadItems();
//   }, []);

//   async function loadItems() {
//     const data = await fetchAllItems();
//     setItems(data);
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (editing) {
//       await updateItem(currentItem._id, currentItem);
//       setEditing(false);
//     } else {
//       await createNewItem(currentItem);
//     }
//     setCurrentItem({ name: '' });
//     loadItems();
//   }

//   function handleEdit(item) {
//     setCurrentItem(item);
//     setEditing(true);
//   }

//   async function handleDelete(id) {
//     await deleteItem(id);
//     loadItems();
//   }

//   return (
//     <div>
//       <h1>Simple CRUD</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={currentItem.name}
//           onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
//           placeholder="Item name"
//           required
//         />
//         <button type="submit">{editing ? 'Update' : 'Add'} Item</button>
//       </form>
//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             {item.name}
//             <button onClick={() => handleEdit(item)}>Edit</button>
//             <button onClick={() => handleDelete(item._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
