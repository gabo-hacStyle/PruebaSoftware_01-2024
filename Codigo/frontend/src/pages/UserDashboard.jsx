import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UserDashboard = () => {
    const location = useLocation();
    const username = location.state.username;
    console.log(username)
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar los tokens de localStorage
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');

        // Redirigir al username a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <div>
            <header>
                <h1>Bienvenido, {username}</h1>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </header>
            
            <main>
                <p>¡Bienvenido a su página de username!</p>
            </main>

        </div>
    );
};

export default UserDashboard;
