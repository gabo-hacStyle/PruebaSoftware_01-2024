import React, { useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../components/table';
import {fetchData, postData} from '../hooks/useGetApi';
import Plot from '../components/plot';

const UserDashboard = () => {
    //Para traer el estado de la ruta: username 
    const location = useLocation();
    // Estado para almacenar el nombre de usuario
    const [username, setUsername] = useState('');
    // Hook para redirigir al usuario a otra página -> login al hacer logout
    const navigate = useNavigate();
    //Estado para almacenar los datos de la tabla
    const [data, setData]  = useState([]);
    //Estado para almacenar los datos de la grafica
    const [imageData, setImageData] = useState(''); 
   
    // Función para manejar el logout
    const handleLogout = () => {
        // Eliminar los tokens de localStorage
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');

        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };

    //Funcion para manejar cuando se oprime el boton de generar dato
    const generateData = async () => {
        // Hacer la solicitud POST
        await postData();
    
        // Luego hacer la solicitud GET
        const response = await fetchData()
        setData(response.data)
        setImageData(response.plot)
    };

    //Funcion  para traer los datos por primera vez
    useEffect( () => {
        const bringData = async () => {
            const response = await fetchData()
            setData(response.data)
            setImageData(response.plot)
        };
        bringData();   
    }, []);

    //Funcion para verificar si se puede acceder o no a dashboard
    useEffect(() => {
        //Verificar si hay algun estado en el location, o sino pa fuera
        if (location.state ===  null || location.state === undefined || !location.state.username ) {
            navigate('/login');
        } else {
            setUsername(location.state.username);
        }
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
                <h2 className='h2' style={{marginBottom: '3px'}}>Bienvenido, {username}</h2>
                <button style={{padding: "5px 15px"}} onClick={handleLogout}>Cerrar sesión</button>
            </header>
            
            <main>
                
                <div style={{marginTop: "17px"}}>
                    <Plot image_url={imageData} />
                </div>
                

                <button style={{margin: "15px"}} onClick={generateData}>Generar dato!</button>

                <Table data={data}/>
            </main>

        </div>
    );
};

export default UserDashboard;
