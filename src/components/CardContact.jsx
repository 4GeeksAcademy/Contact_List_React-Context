import React from "react";
import { useNavigate } from "react-router-dom";


function CardContact(props) {

    const navigate = useNavigate()

    return (

        <>
            <div className="card bg-secondary mb-2"  style={{marginleft:"20rem", width: "15rem", height: "15rem" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/5995/5995295.png" className="card-img-top" alt="Contact" />

                <div className="card-body">
                    <h5 className="card-title"> {props.contactName} </h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.contactMail}</li>
                    <li className="list-group-item">{props.contactPhone}</li>
                    <li className="list-group-item">{props.contactAddress}</li>
                </ul>
                <div className="card-body">
                    <a className="card-link" onClick={() => navigate(`/ViewContacts/${props.contactId}`)}> View Contact</a>
                    <a className="card-link">Delete Contact</a> 
                    <a className="card-link">Edit Contact</a>
                </div>
            </div>
        </>
    )
}
export default CardContact;