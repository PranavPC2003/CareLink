import React, { useEffect, useState } from 'react';

function Maps2(){
    const [maps, setMaps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/maps2/')
    })
}

export default Maps2;