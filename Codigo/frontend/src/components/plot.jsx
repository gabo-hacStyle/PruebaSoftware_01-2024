import React, { useEffect, useState } from 'react';

const Plot = ({image_url}) => {

    return (
        
        <div>
            {console.log("Hola me estoy renderizando")}
            <img src={`data:image/png;base64,${image_url}`} alt="Plot" />
        </div>
    );
};

export default Plot