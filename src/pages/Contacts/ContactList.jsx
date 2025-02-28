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
                console.log(data);
                dispatch({ type: 'setContacts', payload: data.contacts });
            } catch (error) {
                console.error("Hubo un problema con la solicitud:", error);
            }
        };

        fetchContacts();
    }, []);


    const handleDeleteContact = (contact_id) => {
        dispatch({ type: "deleteContact", payload: contact_id });
    };

    return (
        <div className="contact-div">

            <h2 className="h2-container">
                Contact List
            </h2>

            <div className="ContactList">
                {store.contacts?.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <div key={index}>
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