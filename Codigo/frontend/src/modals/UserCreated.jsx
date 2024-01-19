import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCreated = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }

  return (
    <div>
        <div>
            <h2>¡Usuario creado exitosamente!</h2>

            <p style={{margin: '10px'}}>Ahora ya te puedes logear sin problema</p>
            
            <button style={{marginBottom: '10px'}}onClick={handleClick}>Ok</button>
        </div>
    </div>
  )
}

export default UserCreated