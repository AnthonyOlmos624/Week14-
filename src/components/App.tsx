//adding useState from React in App.tsx. need it to hold items, pass state to ItemList and need to update total caculations  so that they are also in state. 


import { useState } from 'react';
import Sidebar from './Sidebar'; //import Sidebar component 
import ItemList from './ItemList';
import { testItems } from './testData'; //import test data
import "../App.css"; // Import CSS file

function App() {
  const [items, setItems] = useState(testItems)
  
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  //adding a new item function so that I can add new items and also adding a button to trigger the function. 
  const addItem = () => {
    const newItem = { id: Date.now(), name: "New Item", price: 75, quantity: 1};
    setItems([...items, newItem]);
  }
  //also need to add a delete function as a prop to itemCard via ItemList
  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  //need to create a function to update item quantity then pass function as a prop to ItemCard. 
  const updateQuantity = (id: number, newQuantity: number) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <button onClick={addItem}>Add New Item</button>
      <div style={{ display: "flex" }}>
        <Sidebar /> {/* need to Render Sidebar */}
        <ItemList items={items} deleteItem={deleteItem} updateQuantity={updateQuantity} />
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App