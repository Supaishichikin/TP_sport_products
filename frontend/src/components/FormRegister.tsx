export default function FormRegister(){
    return <form className="mt-6">
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <div className="mb-2">
            <label
                htmlFor="first_name"
                className="block text-sm font-semibold text-gray-800"
            >
                Firstname
            </label>
            <input
                id="first_name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
        <div className="mb-2">
            <label
                htmlFor="last_name"
                className="block text-sm font-semibold text-gray-800"
            >
                Lastname
            </label>
            <input
                id="last_name"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
    </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <div className="mb-2">
            <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
            >
                Email
            </label>
            <input
                id="email"
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
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
    </div>
    <div style={{width: '50%', margin: '0 auto'}}>
        <label htmlFor="phone"
               className="block text-sm font-semibold text-gray-800">
            Phone
        </label>
        <input id="phone" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-6">
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
            Register
        </button>
    </div>
</form>
}