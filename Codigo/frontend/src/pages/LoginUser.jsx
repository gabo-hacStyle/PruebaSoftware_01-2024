import React, { useState } from 'react';
import { postLogin } from '../hooks/useGetApi';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar los campos antes de enviar la solicitud
        if (username === '') {
            setUsernameError(true);
            return;
        } else {
            setUsernameError(false);
        }

        if (password === '') {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false);
        }

        try {
            const response = await postLogin({ username, password });

            // Almacenar los tokens en localStorage
            localStorage.setItem('access-token', response['access']);
            localStorage.setItem('refresh-token', response['refresh']);

            // Redirigir al usuario a la página de usuario
            navigate(
                '/dashboard', {state: { username }}
            ); // Pasar el nombre del usuario como prop a través del estado de la ruta
        } catch (error) {
            console.error(error);

            if (error.error === "Invalid username or password") {
                setErrorModal(true);
            }
        }

        //Limpiar datos
        setUsername('');
        setPassword('');

    };

    return (
        <div>
            <div>
                {
                    errorModal && (
                        <div>
                            <h2>Usuario o contraseña incorrectos</h2>
                            <button onClick={() => setErrorModal(false)}>Ok</button>
                        </div>
                    )
                }
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
                            style={{ borderColor: usernameError ? 'red' : '' }}
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
                            style={{ borderColor: passwordError ? 'red' : '' }}
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginUser;