import React, { useState } from 'react';
import Forma from "./forma";
import './podaci.css';
import './forma.css';
import Tabela from "./Tabela";
import { nanoid } from 'nanoid';

export default function Projekat() {
    const [contacts, setContacts] = useState([]);
    const [addFormData, setAddFormData] = useState({
        id: '',
        ime: '',
        prezime: '',
        email: ''
    })

    const handleAddFormChange = (e) => {
        e.preventDefault();

        let fieldName = e.target.getAttribute('name');
        let fieldValue = e.target.value;

        let newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleEventSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            id: nanoid(),
            ime: addFormData.ime,
            prezime: addFormData.prezime,
            email: addFormData.email
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }
    return (

        <>
            <Forma handleAddFormChange={handleAddFormChange} handleEventSubmit={handleEventSubmit} />
            <Tabela contacts={contacts} setContacts={setContacts} />
        </>
    )
}
