// src/Services/api.js

const API_URL = 'http://localhost:5000';

// Register User 
export const registerUser = async (userData) => {
    try {
        const res = await fetch(`${API_URL}/employees`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        if (!res.ok) {
            throw new Error(`Failed to register: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Registration Error:", error);
        return { error: true, message: error.message };
    }
};

// Login User 
export const loginUser = async (email, password) => {
    const res = await fetch(`${API_URL}/employees`);
    const users = await res.json();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password
        });
        localStorage.setItem("token", token); // fixed key name
        return { success: true, token };
    } else {
        return { success: false };
    }
};

// Fetch Employees 
export const fetchEmployees = async () => {
    try {
        const response = await fetch(`${API_URL}/employees`);
        if (!response.ok) throw new Error('Failed to Fetch Employees');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
};

// Add Employee 
export const addEmployee = async (employee) => {
    const res = await fetch(`${API_URL}/employees`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    });
    return res.json();
};

// Delete Employee 
export const deleteEmployee = async (id) => {
    await fetch(`${API_URL}/employees/${id}`, {
        method: 'DELETE'
    });
};

// Update Employee
export const updateEmployee = async (id, updatedData) => {
    await fetch(`${API_URL}/employees/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });
};
