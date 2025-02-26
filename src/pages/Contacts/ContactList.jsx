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

    return (
        <div className="ContactList">
            <h2 className="bg-danger">Contact List</h2>
            <div className="row">
                {store.contacts?.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <div key={index} className="col-3">
                            <CardContact 
                                contactName={contact.name}
                                contactMail={contact.email} 
                                contactPhone={contact.phone} 
                                contactAddress={contact.address} 
                                contactId={contact.id} 
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
