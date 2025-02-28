import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";


const ViewContacts = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const fetchContact = () => {
            if (store.contacts) {
                let currentContact = store.contacts.find(contact => contact.id === Number(id))
                setContact(currentContact);
            }
        };
        fetchContact();
    }, []);

    const navigate = useNavigate();

    if (!contact) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="contact-details">
            <h2>Detalles del Contacto</h2>
            <div className="card bg-secondary mb-2 mt-2 text-center" style={{ marginLeft: "20rem", width: "20rem" }}>

                <img src="https://cdn-icons-png.flaticon.com/512/5995/5995295.png" className="card-img-top" alt="Contact" />
                <div className="card-body">
                    <h5 className="card-title">{contact.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Correo: {contact.email}</li>
                    <li className="list-group-item">Teléfono: {contact.phone}</li>
                    <li className="list-group-item">Dirección: {contact.address}</li>
                </ul>

                <div className="card-body">
                    <button
                        className="btn btn-outline bg-red mt-1 mt-2"
                        style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "4rem", height: "2rem", background: "cyan", fontSize: "14px", padding: "0.2rem 0.5rem" }}
                        onClick={() => navigate(`/edit-contact/${contact.id}`)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn btn-outline bg-red mt-1 mt-2"
                        style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "4rem", height: "2rem", background: "cyan", fontSize: "14px", padding: "0.2rem 0.5rem" }}
                        onClick={() => navigate(`/contacts/`)}
                    >
                        Back
                    </button>



                </div>
            </div >
        </div >
    );
};

export default ViewContacts;
