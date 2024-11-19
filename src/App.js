import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/cart" component={CartPage} />
                <Route path="/admin" component={AdminPage} />
                /**Could add other routes here if needed */
            </Switch>
        </Router>
    );
}

export default App;
