
import { Item } from './testData'

//Should define the props for ItemCard where 'item' is of type Item. Adding delete and update function so that it can accept the prop 
interface ItemCardProps {
    item: Item;
    deleteItem: (id: number) => void;
    updateQuantity: (id: number, newQuantity: number) => void;
    onEdit: (item: Item) => void; 
}

function ItemCard ({ item, deleteItem, updateQuantity, onEdit }: ItemCardProps) {
    return(
        <div className="ItemCard">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => deleteItem(item.id)} className="delete-button">Delete</button>
            <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity + 1))} className="increase-button">Increase</button>
            <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}>Decrease</button>
            <button onClick={() => onEdit(item)}>Edit</button>
        </div>
    );
}

export default ItemCard; 