import React, { useState } from "react"; 
import { Item } from "../types";  

interface CartPageProps {
    items: Item[];
    updateQuantity: (id: number, newQuantity: number) => void;
    deleteItem: (id: number) => void;
}

function CartPage({ items, updateQuantity, deleteItem}: CartPageProps) {
    const [couponCode, setCouponCode] = useState(""); 
    const [discount, setDiscount] = useState(0);

    //need to caculate total and discounted total
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountedTotal = total - (total * discount) / 100;

    const handleApplyCoupon = () => {
        if (couponCode === "SAVE10") {
            setDiscount(10);
            alert("Coupon applied! 10% discount added.");
        } else {
            alert("Invalid coupon code!");
        }
    };

    const handleCheckout = () => {
        alert("Proceeding to checkout. Please enter your payment info.");
    };
  

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {items.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id!, item.quantity + 1)}>Increase</button>
                        <button onClick={() => updateQuantity(item.id!, item.quantity - 1)}>Decrease</button>
                        <button onClick={() => deleteItem(item.id!)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <h2>Total: ${discountedTotal.toFixed(2)}</h2>
                <input 
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                <button onClick={handleApplyCoupon}>Apply Coupon</button>    
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
}

export default CartPage; 