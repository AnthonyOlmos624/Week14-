
import ItemCard from "./ItemCard";
import { Item } from './testData'


//need to define the props for ItemList ensuring the 'items' prop is an array of Item. Need to add prop to pass deleteItem and updateQuantity

interface ItemListProps {
    items: Item[];
    deleteItem: (id: number) => void;
    updateQuantity: (id: number, newQuantity: number) => void;
}

function ItemList({ items, deleteItem, updateQuantity }: ItemListProps) {
    return (
        <div>
            {items.map((item) => (
                <ItemCard 
                    key={item.id} 
                    item={item}
                    deleteItem={deleteItem}
                    updateQuantity={updateQuantity} 
                    
                />
            ))}
        </div>
    );
}

export default ItemList; 