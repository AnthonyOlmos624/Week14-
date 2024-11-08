
import ItemCard from "./ItemCard";
import { Item } from './types'


//need to define the props for ItemList ensuring the 'items' prop is an array of Item. Need to add prop to pass deleteItem and updateQuantity

interface ItemListProps {
    items: Item[];
    deleteItem: (id: number) => void;
    updateQuantity: (id: number, newQuantity: number) => void;
    setEditingItem: (item: Item) => void; 
}

function ItemList({ items, deleteItem, updateQuantity, setEditingItem }: ItemListProps) {
    return (
        <div>
            {items.map((item) => (
                <ItemCard 
                    key={item.id} 
                    item={item}
                    deleteItem={deleteItem}
                    updateQuantity={updateQuantity} 
                    onEdit={() => setEditingItem(item)}
                    
                />
            ))}
        </div>
    );
}

export default ItemList; 