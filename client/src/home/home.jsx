import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import styles from './home.module.css'

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
            <div className={styles.container}>
                <h1 className={styles.h1}>World's voice</h1>
                <div className={styles.messageContainer}>
                    <ul className={styles.ul}>
                    <div className={styles.drop}>
                        <p>Drop a message Below</p>
                    </div>
                    {messages.map((e, index) => {
                        let [year, month, day] = e.added.split('-')
                        day = day.substring(0, 2)
                        return <li className={styles.li}key={index}>
                            <div className={styles.messageContainer}>
                                <p><span className={styles.spanColor}>{e.name}</span> from <span className={styles.spanColor}>Berlim</span></p>
                                <div className={styles.messageBox}>
                                    <p>{e.message}</p> <span className={styles.spanDate}>{month}/{day}/{year}</span> 
                                </div>
                            </div>
                            </li>
                })}</ul>
                </div>
            </div>
        </>)   
}