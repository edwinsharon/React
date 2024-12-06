import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const[FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "", 
  });
  const handleInpuChange = (event) => {
    const{name,value}=event.target
    setFormData((prevData)=>({...prevData,[name]:value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(FormData,"the form data");
  }

  return (
    <div className="signup-card">
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First name" name="firstName" value={FormData.firstName} onChange={ (event) => handleInpuChange(event)}/> 
        <input type="text" placeholder="Last name" name="lastName" value={FormData.lastName} onChange={ (event) => handleInpuChange(event)}/>
        <input type="email" placeholder="email" name="email" value={FormData.email} onChange={ (event) => handleInpuChange(event)}/>
        <input type="password" placeholder="Password" name="password" value={FormData.password} onChange={ (event) => handleInpuChange(event)}/>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
