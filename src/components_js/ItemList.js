import React from "react";
import ItemCard from './ItemCard'

function ItemList({ items, deleteItem, updateQuantity, onEdit}) {
    return (
        <div className="row">
            {items.map((item) => (
                <ItemCard
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                updateQuantity={updateQuantity}
                onEdit={() => onEdit(item)}
              />      
            ))}
        </div>
    );
}

export default ItemList; 