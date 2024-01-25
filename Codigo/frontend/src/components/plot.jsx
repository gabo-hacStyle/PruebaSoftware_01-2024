import React, { useEffect, useState } from 'react';

//Este es el componente de la grafica
const Plot = ({image_url}) => {

    return (
        
        <div>
            
            <img src={`data:image/png;base64,${image_url}`} alt="Plot" />
        </div>
    );
};

export default Plot