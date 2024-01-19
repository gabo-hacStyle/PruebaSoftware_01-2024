import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login/', { username, password });
            console.log(response.data);
    
            // Almacenar los tokens en localStorage
            localStorage.setItem('access-token', response.data['access']);
            localStorage.setItem('refresh-token', response.data['refresh']);
    
            console.log(username)
            debugger 
            // Redirigir al usuario a la página de usuario
            navigate(
                '/dashboard', {state: { username }}
            ); // Pasar el nombre del usuario como prop a través del estado de la ruta
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Ingrese su usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginUser;
