import React from "react";   
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";   

const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();

    const edit = async (updatedContact) => {
        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/Dani', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedContact)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Contacto actualizado:", data);

            dispatch({ type: 'setContacts', payload: data.contacts });

        } catch (error) {
            console.error("Hubo un problema con la solicitud:", error);
        }
    };

    return (
        <div className="EditContacts">
            <h2>Edit Contacts</h2>
            
        </div>
    );
};

export default EditContact;
