import React from "react";
import { useNavigate } from "react-router-dom";



function CardContact(props) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/${props.contact_id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Error al eliminar el contacto: ${response.status}`);
            }


            props.onDeleteContact(props.contact_id);

        } catch (error) {
            console.error("Hubo un problema al eliminar el contacto:", error);
        }
    };

    return (

        <>
            <div className="card bg-secondary mb-2 " style={{ marginleft: "20rem", width: "15rem", height: "15rem" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/5995/5995295.png" className="card-img-top" alt="Contact" />

                <div className="card-body bg-white mt-5 mb-2">
                    <h5 className="card-title" > {props.contactName} </h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item mb-1">{props.contactMail}</li>
                    <li className="list-group-item mb-1">{props.contactPhone}</li>
                    <li className="list-group-item mb-1">{props.contactAddress}</li>
                </ul>
                <div className="card-body" style={{ fontSize: "14px", fontColor: "black" }}>

                    <button
                        className="btn bg-white mt-1 me-3"
                        style={{ justifyContent: "center", alignItems: "center", width: "5rem", height: "2rem", fontSize: "12px", padding: "0.1rem 0.2rem" }}
                        onClick={() => navigate(`/ViewContacts/${props.contact_id}`)}  // Verifica si props.contact_id tiene un valor válido
                    >
                        View Contact
                    </button>

                    <button
                        className="btn bg-white mt-1 ms-1"
                        style={{ justifyContent: "center", alignItems: "center", width: "5rem", height: "2rem", fontSize: "12px", padding: "0.1rem 0.2rem" }}
                        onClick={() => navigate(`/EditContacts/${props.contact_id}`)} >

                        Edit Contact
                    </button>

                    <button
                        className="btn btn-outline-danger bg-red mt-1 mt-2"
                        style={{ justifyContent: "center", alignItems: "center", display: "flex", width: "4rem", height: "1rem", fontSize: "12px", padding: "0.2rem 0.5rem" }}
                        onClick={handleDelete}
                    >
                        Delete
                    </button>


                </div>
            </div >
        </>
    )
}
export default CardContact;