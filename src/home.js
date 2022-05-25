import Forma from "./forma";
import './podaci.css';
import './forma.css';
import Tabela from "./Tabela";
import data from './mock-data.json';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';


const Home = () => {

    const [contacts, setContacts] = useState(data);
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
    );
}

export default Home;