import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Form() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const axiosPostData = async () => {
        const postData = {
            name: name,
            message: message,
            country: country
        };

        await axios.post('http://localhost:5000/postMessages', postData)
            .then(res => console.log(`Mensagem ${res}`))
            .catch(err => console.error(err));
    };

    function handleSubmit(event) {
        event.preventDefault();
        axiosPostData();
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="John" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="text" name="message" placeholder="Hello World!" value={message} onChange={(event) => setMessage(event.target.value)} />
            <input type="text" name="Country" placeholder='Hawai' value={country} onChange={(event) => setCountry(event.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
    );
}