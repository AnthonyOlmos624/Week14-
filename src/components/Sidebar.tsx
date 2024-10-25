function Sidebar() {
    return (
        <aside className="Sidebar">
            <h2>Filters</h2>
            {/*could add more filter options here  */}
            <button>Filter by Price</button>
            <button>Filter by Category</button>
        </aside>    
    );
}

export default Sidebar; 