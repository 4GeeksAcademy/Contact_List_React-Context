import React, { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";  



const ViewContacts = () => {
    const { id } = useParams();  // Extraemos el ID del contacto desde la URL
    const [contact, setContact] = useState(null);  // Estado para almacenar los datos del contacto

    useEffect(() => {
        // Hacemos la solicitud para obtener el contacto específico usando el ID
        const fetchContact = async () => {
            try {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/Dani/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setContact(data);  // Establecemos los datos del contacto en el estado
            } catch (error) {
                console.error("Error al obtener el contacto:", error);
            }
        };

        fetchContact();  // Llamamos a la función para obtener el contacto cuando se monta el componente
    }, [id]);  // El efecto se ejecuta cada vez que el ID cambia

    if (!contact) {
        return <div>Cargando...</div>;  // Muestra un mensaje mientras cargan los datos
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
