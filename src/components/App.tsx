//adding useState from React in App.tsx. need it to hold items, pass state to ItemList and need to update total caculations  so that they are also in state. 

//importing ItemForm so it can handle submissions to add or update items. 

import { useEffect, useState, useMemo } from 'react';
import Sidebar from './Sidebar'; //import Sidebar component 
import ItemList from './ItemList';
import ItemForm from './ItemForm'; 
import { Item } from './types'
import { testItems } from './testData'; //import test data
import "../App.css"; // Import CSS file


type SortOrder = "low-to-high" | "high-to-low" | "default"

function App() {
  const [items, setItems] = useState<Item[]>(testItems);
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [ sortOrder, setSortOrder] = useState<SortOrder>("default"); 
  
  const totalAmount = useMemo(() => 
  items.reduce((total, item) => total + item.price * item.quantity, 0),
  [items] 
  ); 

  //need a function to add or update an item in the cart  
  const addOrUpdateItem = (item: Item) => {
    //this should check if item already has an ID (for update) otherwise add it
    if (item.id){
      setItems(items.map(i => (i.id === item.id ? item : i)));
    } else {
      const newItem = { ...item, id: Date.now() }; //this should generate unique ID
      setItems([...items, newItem]);
    }
    setEditingItem(null); //should be able to reset editing item after submission
  }; 
  //also need to add a delete function as a prop to itemCard via ItemList
  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  //need to create a function to update item quantity then pass function as a prop to ItemCard. 
  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity)  } : item
    ));
  };

  //adding a sortItems so that user can choose if they would like to see items of higher or lower value.
  const sortItems = (items: Item[]): Item[] => {
    if(sortOrder === "low-to-high"){
      return [...items].sort((a,b) => a.price - b.price);
    } else if ( sortOrder === "high-to-low") {
      return [...items].sort((a,b) => b.price - a.price);
    }
    return items; //default order (no sorting)
  }; 

  

  //adding a filter function based on price for Sidebar
  const filterItemsByPrice = () => {
    const filtered = items.filter(item => item.price <= 100);// Examle filter
    setFilteredItems(filtered); 
  };
  
  useEffect(() => {
    setFilteredItems(items);// this syncs filteredItems with items  
  }, [items]); 

  

  return (
    <div className="App">
      <h1>Shopping Cart</h1> 
      <ItemForm onSubmit={addOrUpdateItem} existingItem={editingItem ?? undefined} />
      <button onClick={() => setEditingItem(null)}>Add New Item</button>
      <div style={{ display: "flex" }}>
        <Sidebar setSortOrder={setSortOrder} filterItemsByPrice={filterItemsByPrice} /> 
        <ItemList items={sortItems(filteredItems)} deleteItem={deleteItem} updateQuantity={updateQuantity} setEditingItem={setEditingItem} />
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App