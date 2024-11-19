import React from "react";
import { Button } from 'react-bootstrap';


function Sidebar({ onSort, onFilter }) {
    return (
        <div>
            <h2>Sort & Filter</h2>
            <Button variant="primary" onClick={() => onSort('low-to-high')}>Low to High </Button>
            <Button variant="primary" onClick={() => onSort('high-to-low')}>High to Low</Button>
            <Button variant="secondary" onClick={onFilter}>Filter by Price</Button>
        </div>
    );
}

export default Sidebar 