import { useState, useEffect } from "react";

export function UseFetch(url){
    const [datos,setDatos] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);
    
    useEffect(()=>{
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);
    
        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((_datos) => {
                setDatos(_datos)
            })
            .catch((error) => {
                if(error.name==="AbortError"){
                    console.log("Request cancelled");
                }else{
                    setError(error);
                }
            })
            .finally(() => setLoading(false));
        return () => abortController.abort();
    },[]);

    const handleCancelRequest = () =>{
        if(controller){
            abortController.abort();
            setError("Request Cancelled");
        }
    }

    return { datos, loading, error, handleCancelRequest }
}