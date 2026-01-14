import React from "react";
function Register(){
    return (<>
    <div className="container mt-5 mb-7">
        <input type="text" placeholder="Username" className="form-control mb-3" style={{width: "300px"}} />
        <input type="text" placeholder="Full Name" className="form-control mb-3" style={{width: "300px"}} />
        <input type="email" placeholder="Email" className="form-control mb-3" style={{width: "300px"}} />
        <input type="text" placeholder="Phone" className="form-control mb-3" style={{width: "300px"}} />
        <input type="password" placeholder="Password" className="form-control mb-3" style={{width: "300px"}} />
        <input type="password" placeholder="Confirm Password" className="form-control mb-3" style={{width: "300px"}} />
        <button type="button" className="btn btn-primary">Register</button> 
    </div>
    </>);
}

export default Register;