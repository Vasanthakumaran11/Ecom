import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Register from "./Register";

function Login(){
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        
        if(password.length < 8){
            console.log(password);
            setMessage("Password must be at least 8 characters long");
            return;
        }
        
        setMessage("Login successful!");
    }
    
    function handlePasswordChange(e){
        const value = e.target.value;
        setPassword(value);
        
        if(value.length > 0 && message) {
            setMessage("");
        }
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
        if(e.target.value.length > 0 && message) {
            setMessage("");
        }
    }

    return (
        <>
            <button 
                type="button" 
                className="btn btn-primary mx-3"
                onClick={() => navigate('/home')}
            >
                Go to Home
            </button>
            <div className="container mt-5">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input 
                            style={{width: "300px"}} 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            style={{width: "300px"}} 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button> 
                    <button 
                        type="button" 
                        className="btn btn-primary mx-3"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </button>
                    {message && <p className="mt-3">{message}</p>}
                </form>
            </div>
        </>
    );
}

export default Login;