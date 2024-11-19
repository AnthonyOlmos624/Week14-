import React, {useState, useEffect} from "react";

function ItemForm({ onSubmit, existingItem}) {
    const [name, setName] = useState(existingItem?.name || '');
    const [price, setPrice] = useState(existingItem?.price || 0);
    const [quantity, setQuantity] = useState(existingItem?.quantity || 1);

    useEffect(() => {
        if(existingItem){
            setName(existingItem.name);
            setPrice(existingItem.price);
            setQuantity(existingItem.quantity);
        }
    }, [existingItem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id: existingItem?.id, name, price, quantity});
        setName('');
        setPrice(0);
        setQuantity(1);
    };

    return(
        <form onSubmit={handleSubmit}> 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required/>
        <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} placeholder="Quantity" required />
        <button type="submit">{existingItem ? 'Update Item' : 'Add Item'}</button>
        </form>
    );
}

export default ItemForm; 