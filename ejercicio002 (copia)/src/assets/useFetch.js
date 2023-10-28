import { useState, useEffect } from "react";

export default function useFetch(url){
    const [datos,setDatos] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then((response) => response.json())
        .then((datos) => setDatos(datos))
        .finally(() => setLoading(false));
    },[]);

    return { datos, loading };
}