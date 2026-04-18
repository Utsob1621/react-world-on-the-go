import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('Country is visited', country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)

        
    }

    const countries = use(countriesPromise)
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h2>Traveling so far: {visitedCountries.length}</h2>
            <div className='Countries'>
                {
                    countries.map(country => <Country 
                        key={country.id} 
                        handleVisitedCountries={handleVisitedCountries}
                        country ={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;