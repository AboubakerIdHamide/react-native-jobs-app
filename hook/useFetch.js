import { useState, useEffect } from "react";
import axios from "axios";
import { log } from "react-native-reanimated";

export default useFetch=(endpoint, query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '537b119e77mshc1e11310aab1997p1c238djsn08f7cbc861a1',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

    const fetchData=async ()=>{
        setIsLoading(true)

        try{
            const response= await axios.request(options);
            setData(response.data.data)
        }catch(err){
            setError(err)
            alert('there is an error, please try again')
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}