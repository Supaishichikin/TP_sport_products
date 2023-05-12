import { useEffect, useState } from "react";
import { apiTest } from "../api/test";


export default function ApiTest(){
    const [message, setMessage] = useState('');

    useEffect(()=>{
        apiTest().then((response) => setMessage(response.message))
    },[])

    return <>
        {message??null}
    </>
}