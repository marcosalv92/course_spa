const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const api_url = id ? `${API}${id}`: API;
    try {
        const response = await fetch(api_url,);
        const data = await response.json(); 
        return data;   
    } catch (error) {
        console.log('Fetch error: ' , error);
    }
    
    
}

export default getData;