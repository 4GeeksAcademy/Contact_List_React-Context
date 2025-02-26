import React, { useState } from "react";    
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";   
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const { dispatch } = useGlobalReducer();
    const [newContact, setNewContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/Dani/contacts', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newContact)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            dispatch({ type: 'addContact', payload: data.contact });
            

            
            navigate("/contacts");

        } catch (error) {
            console.error("Error al añadir contacto:", error);
        }
    };

    return (
        <div className="addContact">
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newContact.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={newContact.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={newContact.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={newContact.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;
