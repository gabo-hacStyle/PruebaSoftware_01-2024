import React, { useState } from 'react';
import { postUser } from '../hooks/useGetApi';
import UserCreated from '../modals/UserCreated';
import { Link } from 'react-router-dom';

const RegisterUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [notSamePASS, setNotSamePASS] = useState(false);
    const [emailtaken, setEmailtaken] = useState(false);
    const [missingFields, setMissingFields] = useState(false);
    const [usernametaken, setUsernametaken] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleEmailChange = (e) => { 
        setEmail(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Limpiar los mensajes de error
        setNotSamePASS(false);
        setEmailtaken(false);
        setMissingFields(false);
        setUsernametaken(false);
        
        // Verificar que todos los campos estén llenos
        if (!username || !password || !confirmPassword || !email) {
            setMissingFields(true);
            return;
        }
        // Verificar que las contraseñas sean iguales
        if (password !== confirmPassword) {
            setNotSamePASS(true);
            return;
        }
        try {
            const response = await postUser({ username, password, email });
            if (response.message === "User created") {
                setShowModal(true);
            }
        } catch (error) {
            console.error(error);
            // Verificar si el error de 'username' existe
            if (error.response.data.username) {
                console.log(error.response.data.username[0]); // Imprime el primer error de 'username'
                if (error.response.data.username[0] === "user with this username already exists.") {
                    setUsernametaken(true);
                }
            }

            // Verificar si el error de 'email' existe
            if (error.response.data.email) {
                console.log(error.response.data.email[0]); // Imprime el primer error de 'email'
                if (error.response.data.email[0] === "user with this email address already exists.") {
                    setEmailtaken(true);
                }
            }

            
        }
        
    };

    return (
        <div>
            <div>
                {showModal && (
                    <div>
                        <UserCreated />
                    </div>
                )}

                <h2 className='h2'>Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='input'
                            type="email"
                            id="email"
                            value={email}
                            placeholder='Ingrese su email'
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input
                        className='input'
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder='Ingrese su nombre de usuario'
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            className='input'
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Ingrese su contraseña'
                        />
                        <label htmlFor="password">Repite la contraseña:</label>
                        <input
                            className='input'
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder='Ingrese su contraseña de nuevo'
                        />
                    </div>

                    {/**Validaciones incorrectas --> Mensajes de error */}
                    {notSamePASS && (
                        <div>
                            <p style={{color: "#fb0000"}}>Las contraseñas no coinciden</p>
                        </div>
                    )}
                    {emailtaken && (
                        <div>
                            <p style={{color: "#fb0000"}}>El email ya está en uso</p>
                        </div>
                    )}
                    {usernametaken && (
                        <div>
                            <p style={{color: "#fb0000"}}>El nombre de usuario ya está en uso</p>
                        </div>
                    )}

                    {
                        missingFields && (
                            <div>
                                <p style={{color: "#fb0000"}}>Por favor llene todos los campos</p>
                            </div>
                    )}
                    <button type="submit">Registrarse</button>
                </form>
                <p>¿Ya tienes cuenta? <Link to="/login">Ingresa aquí</Link></p>
            </div>
        </div>
    );
};

export default RegisterUser;
