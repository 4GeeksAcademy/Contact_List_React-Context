import React from "react";
import { useNavigate } from "react-router-dom";

function CardContact(props) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        console.log('Eliminando contacto con id:', props.contactId);
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Dani/contacts/${props.contactId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Error al eliminar el contacto: ${response.status}`);
            }


            props.onDeleteContact(props.contactId);

        } catch (error) {
            console.error("Hubo un problema al eliminar el contacto:", error);
        }
    };

    return (
        <div className="card mt-5" style={{ backgroundColor: "orange", marginLeft: "20rem", width: "15rem", height: "16rem" }}>
            <img src="https://cdn-icons-png.flaticon.com/512/5995/5995295.png" className="card-img-top" alt="Contact" />




            <ul className="list-group list-group-flush " style={{ borderRadius: "10px", width: "15rem" }}>
                <div className="card-body bg-white"><h5 className="card-title">{props.contactName}</h5></div>
                <li className="list-group-item ">{props.contactMail}</li>
                <li className="list-group-item ">{props.contactPhone}</li>
                <li className="list-group-item ">{props.contactAddress}</li>
            </ul>

            <div className="card-body " style={{ display: "flex" }}>

                <button
                    className="btn btn-outline bg-red  "
                    style={{ marginRight: "20px", alignItems: "center", display: "flex", width: "4rem", height: "3rem", background: "orange", fontSize: "12px", padding: "0.2rem 0.5rem", fontWeight: "bold" }}
                    onClick={() => navigate(`/view-contact/${props.contactId}`)}
                >
                    View Contact
                </button>

                <button
                    className="btn btn-outline bg-red  "
                    style={{ marginRight: "20px", alignItems: "center", display: "flex", width: "4rem", height: "3rem", background: "orange", fontSize: "12px", padding: "0.2rem 0.5rem", fontWeight: "bold" }}
                    onClick={() => navigate(`/edit-contact/${props.contactId}`)}
                >
                    Edit Contact
                </button>

                <button
                    className="btn btn-outline bg-red "
                    style={{ marginRight: "20px", alignItems: "center", display: "flex", width: "4rem", height: "3rem", background: "orange", fontSize: "12px", padding: "0.2rem 0.5rem", fontWeight: "bold" }}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default CardContact;
