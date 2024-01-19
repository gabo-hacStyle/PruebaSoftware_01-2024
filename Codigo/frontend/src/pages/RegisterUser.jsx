import React, { useState } from 'react';
import { postUser } from '../hooks/useGetApi';
import UserCreated from '../modals/UserCreated';

const RegisterUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => { 
        setEmail(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postUser({ username, password, email });
        if (response.message === "User created") {
            setShowModal(true);
        }
    };

    return (
        <div>
            
            {showModal && (
                <div>
                    <UserCreated />
                </div>
            )}

            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default RegisterUser;
