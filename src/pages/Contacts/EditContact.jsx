import React, { useEffect, useState } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";


const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [currentContact, setCurrentContact] = useState({});

    useEffect(() => {


        const fetchContact = () => {

            if (store.contacts) {
                let storeContact = store.contacts.find(contact => contact.id === Number(id))


                setCurrentContact(storeContact);
                setLoading(false);
            }
        };
        fetchContact();
    }, []);

    const handleEdit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Dani/contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentContact)

            });

            navigate("/contacts");


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }

        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error);
        }


    };

    const handleChange = (e) => {
        setCurrentContact({
            ...currentContact,
            [e.target.name]: e.target.value
        });
    };

    if (
        loading
    ) {
        return (
            <div> <h2> Cargando... </h2></div>
        )
    }

    return (
        <div className="addContact">
            <h2>Add Contact</h2>
            <form onSubmit={handleEdit}>
                <input
                    type="text"
                    name="name"
                    value={currentContact.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    maxLength={20}
                />
                <input
                    type="email"
                    name="email"
                    value={currentContact.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={currentContact.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={currentContact.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <button
                    className="btn bg-white mt-1 me-3"
                    style={{ justifyContent: "center", alignItems: "center", width: "5rem", height: "2rem", fontSize: "12px", padding: "0.1rem 0.2rem" }}
                    onClick={() => navigate(`/contacts/${contact.id}`)}></button>
            </form>
        </div>
    );
};

export default EditContact;