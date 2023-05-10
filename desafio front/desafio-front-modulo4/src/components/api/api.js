import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MeuComponente() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const api = axios.create({
            baseURL: 'https://github.com/cubos-academy/desafio-frontend-md3-ddst10/wiki/Documenta%C3%A7%C3%A3o-da-API',
            headers: { 'Content-Type': 'application/json' }
        });

        async function Data() {
            try {
                const response = await api.get('/discover/movie?language=pt-BR&include_adult=false');
                setData(response.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        Data();
    }, []);
}

export default MeuComponente;