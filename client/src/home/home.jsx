import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import styles from './home.module.css'

export function Home() {
    const [messages, setMessages] = useState([])
    const messageListRef = useRef(null);
    
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

    const scrollToBottom = () => {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    },[messages])

    return (<>
            <div className={styles.container}>
                <header className={styles.header}>
                <h1 className={styles.h1}>World's</h1>
                <h2 className={styles.h2}>voice</h2>
                </header>
                <div className={styles.messageContainer}>
                    <ul className={styles.ul} ref={messageListRef}>
                    <div className={styles.drop}>
                        <p>Drop a message Below</p>
                    </div>
                    {messages.map((e, index) => {
                        let [year, month, day] = e.added.split('-')
                        day = day.substring(0, 2)
                        return <li className={styles.li}key={index}>
                                <p><span className={styles.spanColor}>{e.name}</span> from <span className={styles.spanColor}>{e.country}</span></p>
                                <div className={styles.messageBox}>
                                    <p>{e.message}</p> <span className={styles.spanDate}>{month}/{day}/{year}</span> 
                                </div>
                            </li>
                })}</ul>
                </div>
            </div>
        </>)   
}