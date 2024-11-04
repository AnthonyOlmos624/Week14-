import React from "react";
import { Item } from './testData'

//Should define the props for ItemCard where 'item' is of type Item. Adding delete and update function so that it can accept the prop 
interface ItemCardProps {
    item: Item;
    deleteItem: (id: number) => void;
    updateQuantity: (id: number, newQuantity: number) => void 
}

function ItemCard ({ item, deleteItem, updateQuantity }: ItemCardProps) {
    return(
        <div className="ItemCard">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity + 1))}>Increase</button>
            <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}>Decrease</button>
        </div>
    );
}

export default ItemCard; 