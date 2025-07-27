import React, { useState } from 'react';
import { registerUser } from '../Services/api'; 



const Register = () => {
    const [form,setForm] = useState({name:'',email:'',password:'',department:'HR'});
    
    const handleChange =(e)=>setForm({...form , [e.target.name]:e.target.value});

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await registerUser(form);
        alert("Registration Successfull..!");
    }
 
    return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <br />
        <input type="text" name='name' placeholder='Enter Name' required
         onChange={handleChange} /> <br /><br />
        <input   onChange={handleChange} type="email" name='email' placeholder='Enter Email-ID' required  /> <br /><br />
        <input   onChange={handleChange} type="password" name='password' placeholder='Enter Password' required  /> <br /><br />
        <select   onChange={handleChange} name="department" >
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
            <option value="Support">Support</option>
             <option value="Sales">Sales</option>
        </select> <br /><br />
        <button type="submit" className='btn btn-primary'>Register</button>
     
     
      </form>
    </div>
  )
}

export default Register