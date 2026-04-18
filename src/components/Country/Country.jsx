import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
        console.log(handleVisitedCountries)
    const handleVisited = () => {
        setVisited(!visited)
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        handleVisitedCountries(country)
    }
    return (
        <div className={`Country ${visited && 'country-visited'}`}>
            <h2>Title : {country.title}</h2>
            <button 
                className={visited ? 'btn-visited' : 'btn-not-visited'} 
                onClick={handleVisited}>{
                visited ? "Visited" : "Not Visited" 
                }</button>
        </div>
    );
};

export default Country;