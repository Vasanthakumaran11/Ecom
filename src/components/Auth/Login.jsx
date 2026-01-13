import { useState } from "react";
import { Link } from "react-router-dom";
function Login(){
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
    
    

    return (
        <>
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
                <Link to="/register" className="btn btn-link">Register</Link>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
        </>
    );
}

export default Login;