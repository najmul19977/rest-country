import React, { useEffect, useState } from 'react';
import './Country.css';
import Disply from '../DisplyCountry/Disply';

const Countrys = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data));

    }, [])
    return (
        <div className='counrty'>
            <h1>Visiting Every Countries Of The World</h1>
            <h2>See All Country{country.length}</h2>
            <div className='country-container'>
                {
                    country.map(c => <Disply
                        key={country.id}
                        c={c}
                    ></Disply>)
                }
            </div>
        </div>
    );
};

export default Countrys;