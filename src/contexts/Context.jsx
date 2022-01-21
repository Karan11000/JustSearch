import React, {createContext, useState} from 'react'
import axios  from 'axios';

const ContextState = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

function Context({children}) {
    const [results, setResults] =useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');
    const [alanInstance, setAlanInstance] = useState();
    
    
    const getResults = async (url) => {
        setLoading(true);
        //api key = 15c72c0c93msh6bb36646e712ea6p1fad69jsn3c67de78c642
     console.log(`${baseUrl}${url}`)
        const res = await fetch(`${baseUrl}${url}`, {
            "method": "GET",
            "headers": {
                "x-user-agent": "desktop",
		"x-proxy-location": "US",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "15c72c0c93msh6bb36646e712ea6p1fad69jsn3c67de78c642"
            }
        })
        
    
        const data = await res.json();
        console.log("hey", data);
    
        setResults(data);
        setLoading(false);
      };
    return (
        <ContextState.Provider value = {{ getResults, results, searchTerm, setSearchTerm, loading, alanInstance, setAlanInstance}} >{children}</ContextState.Provider>
    );
}

export {Context, ContextState};