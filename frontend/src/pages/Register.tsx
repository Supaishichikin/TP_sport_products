import FormRegister from "../components/FormRegister";

export default function Register(){
    return <>
    <div style={{height: "100%", width: "100%", alignItems: "center"}} className="relative flex flex-col justify-center overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Register
                </h1>
                <FormRegister/>
                <p className="text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Log in
                    </a>
                </p>
            </div>
        </div>
    </>
}