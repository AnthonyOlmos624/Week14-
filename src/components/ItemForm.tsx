//have to either create a form or an update form with at least 2 inputs and also have the previous requirements from the previous weeks.*It has at least 3 React components *It’s displaying the data *It’s using at least 1 prop * A user can create new items * A user can delete items * A user can update at least one property on the items * The app does NOT need to connect to an API. So when the page is refreshed, all the changes will be lost. That’s not a problem, we’ll learn how to save to a backend soon

import React, { useState, useEffect } from "react";

interface ItemFormProps {
    onSubmit: (item: { id?: number, name: string, price: number, quantity: number}) => void; 
    existingItem?: { id?: number, name: string, price: number, quantity: number};
}

function ItemForm ({ onSubmit, existingItem }: ItemFormProps) {
    const [name, setName] = useState(existingItem?.name || "");
    const [price, setPrice] = useState(existingItem?.price || 0);
    const [quantity, setQuantity] = useState(existingItem?.quantity || 1);

    useEffect(() => {
        if(existingItem) {
            setName(existingItem.name);
            setPrice(existingItem.price);
            setQuantity(existingItem.quantity);
        }
    }, [existingItem]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ id: existingItem?.id, name, price, quantity});
        setName("");
        setPrice(0);
        setQuantity(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" required />
           <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required />
           <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" required />
            <button type="submit">{existingItem ? "Update Item" : "Add Item"}</button>

        </form>
    );
}

export default ItemForm; 