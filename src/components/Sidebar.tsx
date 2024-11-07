
//creating the sidebar functions to be used by user. Now they should be able to filter items by price
interface SidebarProps {
    filterItemsByPrice: () => void
}

function Sidebar({ filterItemsByPrice}: SidebarProps) {
    return (
        <aside className="Sidebar">
            <h2>Filters</h2>
            {/*could add more filter options here  */}
            <button onClick={filterItemsByPrice}>Filter by Price</button>
            
        </aside>    
    );
}

export default Sidebar; 