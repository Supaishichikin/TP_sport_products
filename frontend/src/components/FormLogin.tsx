import { sendLoginRequest } from "../api/users"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return <form className="mt-6">
    <div className="mb-2">
        <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
        >
            Email
        </label>
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
    </div>
    <div className="mb-2">
        <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
        >
            Password
        </label>
        <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
    </div>
    <a
        href="#"
        className="text-xs text-purple-600 hover:underline"
    >
        Forget Password?
    </a>
    <div className="mt-6">
        <button onClick={async () => {
            const response = await sendLoginRequest(email, password).then((response) =>{
                if(response && response.accessToken){
                    localStorage.setItem("access_token", response.accessToken);
                    localStorage.setItem("refresh_token", response.refreshToken);
                    navigate("/products");
                }
            } );
            
        }} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Login
        </button>
    </div>
</form>
}