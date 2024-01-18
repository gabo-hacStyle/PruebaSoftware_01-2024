import React from 'react';

const LoginUser = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                            Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Ingrese su usuario"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginUser;
