
import { Item } from './testData'

//Should define the props for ItemCard where 'item' is of type Item. Adding delete and update function so that it can accept the prop 
interface ItemCardProps {
    item: Item;
    deleteItem: (id: number) => void;
    updateQuantity: (id: number, newQuantity: number) => void;
    onEdit: (item: Item) => void; 
}

function ItemCard ({ item, deleteItem, updateQuantity, onEdit }: ItemCardProps) {
    //Ensure item.id is defined if nor return early or do nothing
    const itemId = item.id ?? 0; //default to 0 if item.id is undefined 
    return(
        <div className="ItemCard">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => deleteItem(itemId!)} className="delete-button">Delete</button>
            <button onClick={() => updateQuantity(itemId, item.quantity + 1)} className="increase-button">Increase</button>
            <button onClick={() => updateQuantity(itemId, item.quantity - 1)} className="decrease-button">Decrease</button>
            <button onClick={() => onEdit(item)}>Edit</button>
        </div>
    );
}

export default ItemCard; 