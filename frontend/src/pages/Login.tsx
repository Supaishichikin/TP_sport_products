import FormLogin from "../components/FormLogin"

export default function Login(){
    return <>
    <div style={{height: "100%", width: "100%", alignItems: "center"}} className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Login
                </h1>
                <FormLogin/>
                <p className="text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    </>
}