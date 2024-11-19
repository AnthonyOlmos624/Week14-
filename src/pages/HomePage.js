import React, { useState, useEffect } from "react";
import api from "../api/api";
import Sidebar from "../components/Sidebar";
import ItemList from "../components/ItemList";


function HomePage() {
    const [items, setItems] = useState([]);
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        api.get('/items').then((response) => setItems(response.data));
    }, []);

    const sortItems = () => {
        if (sortOrder === 'low-to-high') {
            return [...items].sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
            return [...items].sort((a, b) => b.price - a.price)
        }
        return items;
    };
    return (
        <div>
            <SideBar onSort={setSortOrder} />
            <ItemList items={sortItems()} />
        </div>
    );
}

export default HomePage; 

