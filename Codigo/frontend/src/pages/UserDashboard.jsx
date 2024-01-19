import React, { useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../components/table';
import {fetchData, postData} from '../hooks/useGetApi';
import Plot from '../components/plot';

const UserDashboard = () => {
    const location = useLocation();
    const username = location.state.username;
    const navigate = useNavigate();
    const [data, setData]  = useState([]);
    const [imageData, setImageData] = useState(''); // Assuming the response contains base64 data

    const handleLogout = () => {
        // Eliminar los tokens de localStorage
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');

        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };

    const generateData = async () => {
        // Hacer la solicitud POST
        await postData();
    
        // Luego hacer la solicitud GET
        const response = await fetchData()
        setData(response.data)
        setImageData(response.plot)
    };

    useEffect( () => {
        const bringData = async () => {
            const response = await fetchData()
            setData(response.data)
            setImageData(response.plot)
        };
        bringData();   
    }, []);

    useEffect(() => {
        // Verificar si existe el token de acceso en localStorage
        const accessToken = localStorage.getItem('access-token');
        if (!accessToken) {
            // Redirigir al usuario a la página de inicio de sesión
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <header>
                <h1>Bienvenido, {username}</h1>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </header>
            
            <main>
                <p>¡Bienvenido a su página de usuario!</p>

                <Plot image_url={imageData} />

                <button onClick={generateData}>Generar dato!</button>

                <Table data={data}/>
            </main>

        </div>
    );
};

export default UserDashboard;
