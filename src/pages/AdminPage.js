import React, { useState } from "react";

function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleLogin = () => {
        if (username === "admin" && password === "password123") {
            setIsLoggedIn(true);
            alert("Login successfull!");
        } else {
            alert("Invalid credentials");
        }
    };

    const handlePasswordChange = () => {
        if (newPassword.length >= 6) {
            alert("Password successfully changed!");
        } else {
            alert("Password must be at least 6 characters long.");
        }
    };

    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    <h1>Admin Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>            
        ) : (
            <div>
                <h1>Admin Dashboard</h1>
                <h2>Change Password</h2>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={handlePasswordChange}>Change Password</button>
            </div>        
        )}
        </div>
    );

}

export default AdminPage; 