import React from "react";

function ItemCard({ item, deleteItem, updateQuantity, onEdit }){
    return (
        <div className="ItemCard">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => deleteItem(item.id)} className= "delete-button">Delete</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>Increase</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>Decrease</button>
            <button onClick={() => onEdit(item)}>Edit</button>
        </div>
    );
}

export default ItemCard 