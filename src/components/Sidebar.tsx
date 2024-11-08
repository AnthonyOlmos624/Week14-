
//creating the sidebar functions to be used by user. Now they should be able to filter items by price
interface SidebarProps {
    setSortOrder: (order: 'low-to-high' | 'high-to-low' | 'default') => void;
    filterItemsByPrice: () => void;
}

function Sidebar({ setSortOrder, filterItemsByPrice }: SidebarProps) {
    return (
        <aside className="Sidebar">
            <h2>Filters</h2>
            {/*could add more filter options here  */}
            <button onClick={() => setSortOrder("low-to-high")}>Sort by Price: Low to High</button>
            <button onClick={() => setSortOrder("high-to-low")}>Sort by Price: High to Low</button>
            <button onClick={filterItemsByPrice}>Filter by Price</button>
            
        </aside>    
    );
}

export default Sidebar; 