import axios from 'axios';

export const httpRequest = async(url = '',accion = 'GET', body = {}) => {
    try {
        switch (accion) {
            case 'GET':
                
                return await axios.get(url);
                
            case 'CREATE':
                
                return await axios.post(url,body,{headers:{'x-access-token':'TOKEN','Content-Type': 'application/json'}});
              
            case 'UPDATE':
        
                return await axios.put(url,body,{headers:{'x-access-token':'TOKEN','Content-Type': 'application/json','Accept': 'multipart/form-data'}});

            case 'DELETE':
                
                return await axios.delete(url,{headers:{'x-access-token':'TOKEN'}});
        
            default:

                return await axios.get(url);
        }
    } catch (error) {
        return error
    }
}
