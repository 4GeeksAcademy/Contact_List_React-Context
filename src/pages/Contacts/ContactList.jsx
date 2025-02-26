import React, { useEffect } from "react";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import CardContact from "../../components/CardContact.jsx";

const ContactList = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const fetchContacts = async () => {

            try {
                const response = await fetch('https://playground.4geeks.com/contact/agendas/Dani');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                dispatch({ type: 'setContacts', payload: data.contacts });
            } catch (error) {
                console.error("Hubo un problema con la solicitud:", error);
            }
        };

        fetchContacts();
    }, [dispatch]);

    //BORRA EL CONTACTO CON LOS DATOS DEL HANDLE
     const handleDeleteContact = (contact_id) => {
        dispatch({ type: "deleteContact", payload: contact_id });
    };


    return (
        <div className="ContactList " style={{textAlign:"center", fontSize:"15px", flexWrap: "wrap"}}>
            <h2 className= "container mb-5" style={{justifyContent:"center", fontSize:"35px", background:"orange",  borderRadius: "15px", width: "50rem"}}>Contact List</h2>
            <div className="container mt-5" style={{ display: "flex", justifyContent: "center" }}>
                {store.contacts?.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <div key={index} className="col-4 row">
                            <CardContact 
                                contactName={contact.name}
                                contactMail={contact.email} 
                                contactPhone={contact.phone} 
                                contactAddress={contact.address} 
                                contactId={contact.id} 
                                onDeleteContact={handleDeleteContact}
                            />
                        </div>
                    ))
                ) : (
                    <p>No contacts available</p>
                )}
            </div>
        </div>
    );
};

export default ContactList;
