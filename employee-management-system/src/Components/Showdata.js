import React, { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee } from '../Services/api';
import { useNavigate } from 'react-router-dom';

const Showdata = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees()
            .then((data) => {
                console.log("Setting Employees State", data);
                setEmployees(data);
            })
            .catch((error) => {
                console.error(`Failed to Fetch Data: ${error}`);
            });
    }, []);

    const handleEdit = (employee) => {
        navigate(`/edit/${employee.id}`);
    };

    const handleDelete = async (id) => {
        try {
            await deleteEmployee(id);
            setEmployees(employees.filter(emp => emp.id !== id));
            alert('Employee Deleted Successfully!');
        } catch (error) {
            console.error('Failed to delete employee:', error);
            alert('Error deleting employee.');
        }
    };

    return (
        <div className='container mt-4'>
            <h3 className='mb-3'>Employee List</h3>
            <table className='table table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>••••••••</td> {/* Masked password */}
                                <td>{emp.department}</td>
                                <td>
                                    <button
                                        className='btn btn-primary me-3'
                                        onClick={() => handleEdit(emp)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleDelete(emp.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className='text-center text-white bg-dark'>
                                No Employees Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Showdata;
