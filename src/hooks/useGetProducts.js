import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://localhost:8000/api/v0/allproduct';

export const useGetProducts = () => {
    
    const [product, setProduct] = useState({
        data:null, 
        isLoading:true
    });

    const [isUpdate, setIsUpdate] = useState(false);

    const listProduct = async () => {

        setProduct({
            ...product, 
            isLoading:true
        });

        const res = await axios.get(URL);

        const { Data } = res.data;

        setProduct({
            data:Data, 
            isLoading:false
        });
    }

    useEffect(() => {
        listProduct();
    }, []);

    useEffect(() => {
        if(isUpdate){
            listProduct();
            setIsUpdate(false);
        }
    }, [isUpdate]);
    

    return {
        data:product.data,
        isLoading:product.isLoading,
        setProduct,
        setIsUpdate
    }
;
}
