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
            
            <button onClick={handleClick}>Ok</button>
        </div>
    </div>
  )
}

export default UserCreated