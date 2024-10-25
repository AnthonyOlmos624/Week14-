import Sidebar from './Sidebar'; //import Sidebar component 
import ItemList from './ItemList';
import { testItems, totalAmount } from './testData'; //import test data
import "../App.css"; // Import CSS file

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div style={{ display: "flex"}}>
        <Sidebar /> {/* need to Render Sidebar */}
        <ItemList items={testItems} />
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App