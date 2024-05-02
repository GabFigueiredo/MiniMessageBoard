import React from "react";
import { useState } from "react";
import  axios  from 'axios';
import {useNavigate} from 'react-router-dom'

export function Form() {
    const [name, changeName] = useState()
    const [message, changeMessage] = useState()

    const navigate = useNavigate()

    const axiosPostData = async() => {
        const postData = {
            name: name,
            message: message,
        }

        await axios.post('http://localhost:5000/getMessages', postData)
        .then(res => console.log(`Mensagem ${res}`))
    }
    
    function handleClick(e) {
        e.preventDefault()


        axiosPostData()
        navigate('/')
    }


    return (<form>
        <input type="text" name="name" placeholder="John" onChange={(event) => changeName(event.target.value)}/>
        <input type="text" name="message" placeholder="Hello World!" onChange={(event) => changeMessage(event.target.value)}/>
        <input type="submit" onClick={handleClick}/>
    </form>)
}
