import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";  


const ViewContacts = () => {
    const { id } = useParams();  
    const [contact, setContact] = useState(null);  

    useEffect(() => {
        
        const fetchContact = async () => {
            try {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/Dani/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setContact(data);  
            } catch (error) {
                console.error("Error al obtener el contacto:", error);
            }
        };

        fetchContact();  
    }, [id]); 

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
                    <a className="card-link" href="#">Editar Contacto</a>
                    <a className="card-link" href="#">Eliminar Contacto</a>
                </div>
            </div>
        </div>
    );
};

export default ViewContacts;
