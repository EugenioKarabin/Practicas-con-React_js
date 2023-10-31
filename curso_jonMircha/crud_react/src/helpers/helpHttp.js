export const helpHttp = () => {
    const customFetch = (endpoint,options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController()
        options.signal = controller.signal

        options.method = options.method||"GET"
        options.headers = options.headers
            ?{...defaultHeader,...options.headers}
            :defaultHeader;
        
        options.body = JSON.stringify(options.body)||false
        if(!options.body) delete options.body

        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint,options)
                .then(res => 
                    res.ok
                        ?res.json()
                        :Promise.reject({
                            err:true,
                            status:res.status||"00",
                            statusText:res.statusText||"Ocurrio un error",
                        })
                )
                .catch(err => err);
    }

    const get = (url,opcions={}) => customFetch(url,opcions)
    
    const post = (url,opcions={}) => {
        opcions.method = "POST"
        return customFetch(url,opcions)
    }

    const put = (url,opcions={}) => {
        opcions.method = "PUT"
        return customFetch(url,opcions)
    }
    const del = (url,opcions={}) => {
        opcions.method = "DELETE"
        return customFetch(url,opcions)
    }

    return {
        get,
        post,
        put,
        del
    }
}