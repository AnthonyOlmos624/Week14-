//Define the type for an item
interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

//Should define the props for ItemCard where 'item' is of type Item
interface ItemCardProps {
    item: Item;
}

function ItemCard ({ item }: ItemCardProps) {
    return(
        <div className="ItemCard">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            {/* Might add buttons here to add/remove/ update items */}
        </div>
    );
}

export default ItemCard; 