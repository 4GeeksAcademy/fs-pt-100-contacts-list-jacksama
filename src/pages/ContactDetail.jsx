import React from "react";
import { useParams } from "react-router-dom";
import { useContacts } from "../context/contactContext";


function ContactDetail() {
    const { id } = useParams();
    const { state } = useContacts();

    const contact = state.contacts.find((c) => c.id === Number(id));

    if (!contact) {
        return (
            <div>
                <h2>Contacto no encontrado</h2>
                <Link to="/">Volver</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Detalle de {contact.name}</h2>
            <p>Email: {contact.email}</p>
            <Link to="/" >Volver a la lista</Link>
        </div>
    );
}

export default ContactDetail;
