import React from 'react';

const UserDashboard = () => {
    const username = 'John Doe'; // Aquí puedes obtener el nombre de usuario desde tu lógica de autenticación

    const handleLogout = () => {
        // Lógica para cerrar sesión
    };

    return (
        <div>
            <header>
                <h1>Bienvenido, {username}</h1>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </header>
            {/* Resto del contenido de la pantalla */}
        </div>
    );
};

export default UserDashboard;
