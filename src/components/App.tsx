//adding useState from React in App.tsx. need it to hold items, pass state to ItemList and need to update total caculations  so that they are also in state. 

//importing ItemForm so it can handle submissions to add or update items. 

import { useState } from 'react';
import Sidebar from './Sidebar'; //import Sidebar component 
import ItemList from './ItemList';
import ItemForm from './ItemForm'; 
import { testItems } from './testData'; //import test data
import "../App.css"; // Import CSS file

function App() {
  const [items, setItems] = useState(testItems);
  const [editingItem, setEditingItem] = useState(null);
  const [ sortOrder, setSortOrder] = useState("default") 
  
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  //adding a new item function so that I can add new items and also adding a button to trigger the function. 
  const addOrUpdateItem = (item) => {
    if (item.id){
      setItems(items.map(i => (i.id === item.id ? item : i)));
    } else {
      const newItem = { ...item, id: Date.now() };
      setItems([...items, newItem]);
    }
    setEditingItem(null); //should be able to reset editing item after submission
  }; 
  //also need to add a delete function as a prop to itemCard via ItemList
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  //need to create a function to update item quantity then pass function as a prop to ItemCard. 
  const updateQuantity = (id, newQuantity) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  //adding a sortItems so that user can choose if they would like to see items of higher or lower value.
  const sortItems = (items) => {
    if(sortOrder === "low-to-high"){
      return [...items].sort((a,b) => a.price - b.price);
    } else if ( sortOrder === "high-to-low") {
      return [...items].sort((a,b) => b.price - a.price);
    }
    return items; //default order (no sorting)
  }; 



  //adding a filter function for Sidebar
  const filterItemsByPrice = () => {
    const filteredItems = items.filter(item => item.price <= 100);// Examle filter
    setItems(filteredItems); 
  }
  

  return (
    <div className="App">
      <h1>Shopping Cart</h1> 
      <ItemForm onSubmit={addOrUpdateItem} existingItem={editingItem} />
      <button onClick={() => setEditingItem(null)}>Add New Item</button>
      <div style={{ display: "flex" }}>
        <Sidebar filterItemsByPrice={filterItemsByPrice} /> 
        <ItemList items={items} deleteItem={deleteItem} updateQuantity={updateQuantity} setEditingItem={setEditingItem} />
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App