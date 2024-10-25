import ItemCard from "./ItemCard";

//Need to define the type for each item
interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

//need to define the props for ItemList ensuring the 'items' prop is an array of Item

interface ItemListProps {
    items: Item[];
}

function ItemList({ items }: ItemListProps) {
    return (
        <div>
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ItemList; 