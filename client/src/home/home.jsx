import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

export function Home() {
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:5000/messages')
                setMessages(response.data)
                console.log(response.data)
                console.log('Fetch Data succesfuly done!')
            }
            catch(err) {
                console.error('Fetch data failed', err)
            }
        }
        fetchData()
    }, [])
    return (<>
        <h1>Welcome to the world's message</h1>
        <ul>
            {messages.map((e, index) => {
                return <li key={index}>Name: {e.name} Message: {e.message} Added: {e.added}</li>
            })}
        </ul>
    </>)   
}