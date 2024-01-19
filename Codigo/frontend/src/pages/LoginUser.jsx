import React, { useState } from 'react';
import { postLogin } from '../hooks/useGetApi';
import { useNavigate, Link } from 'react-router-dom';
const LoginUser = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [invalidCredetials, setInvalidCredetials] = useState(false);

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
            console.log(error.response.data.error)

            if (error.response.data.error === "Invalid username or password") {
                setInvalidCredetials(true);
            }
        }

        //Limpiar datos
        setUsername('');
        setPassword('');

    };

    return (
        <div>
            <div>
                
                <h2 className='h2'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Usuario</label>
                        <input
                            className='input'
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
                            className='input'
                            type="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderColor: passwordError ? 'red' : '' }}
                        />
                    </div>
                    
                    {
                        invalidCredetials && (
                            <p style={{ color: 'red' }}>Usuario o contraseña incorrectos</p>
                        )
                    }

                    <button type="submit">Iniciar sesión</button>
                    <p style={{ fontSize: 'small' }}>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
                </form>
                
            </div>
        </div>
    );
};

export default LoginUser;