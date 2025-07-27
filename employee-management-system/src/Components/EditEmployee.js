import React, { useEffect } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useState } from 'react';


const API_URL = 'http://localhost:5000';


const EditEmployee = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
            name:'',
            email:'',
            password:'',
            department:''
        });

    useEffect(()=>{
        // Fetching Existing Emp Data 
        const fetchEmployee = async ()=>{
            const response = await fetch(`${API_URL}/employees/${id}`);

            if(response.ok){
                const data = await response.json();
                setFormData(data);
            }
        };
        fetchEmployee();
    },[id]);

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch(`${API_URL}/employees/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        });
        alert("Employee Data Updated Successfully..!");
        navigate('/showData');
    }
  return (
    <div className='container'>
       <div className=' pt-3 m-5'>
        <h3 className='text-danger'>Edit Employee Details.</h3>
        <form onSubmit={handleSubmit}>

            <div className='mb-2'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' className='form-control' value={formData.name} onChange={handleChange} />
            </div>

            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className='form-control' value={formData.email} onChange={handleChange} />
            </div>

            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className='form-control' value={formData.password} onChange={handleChange} />
            </div>

            <div className='mb-2'>
                <label htmlFor="department">Department</label>
                <select  className='form-control' name="department" value={FormData.department} onChange={handleChange}>
                    <option value="HR">HR</option>
                    <option value="Admin">Admin</option>
                    <option value="Support">Support</option>
                    <option value="Sales">Sales</option>
                </select>
            </div>

            <button className='btn btn-primary me-2' type='submit' >Update</button>
            <button className='btn btn-danger' onClick={()=>navigate('/showData')}>Cancel</button>

        </form>
       </div>
    </div>
  )
}

export default EditEmployee