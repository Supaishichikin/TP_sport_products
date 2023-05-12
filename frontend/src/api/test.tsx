import axios from "axios";

export async function apiTest(){
    try {
        const response = await axios.get('http://localhost:8030/');
        return response.data;
    }catch (error: any) {
        console.log(error)
        return error.response;
    }
}