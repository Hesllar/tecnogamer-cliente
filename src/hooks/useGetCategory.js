import { useState, useEffect } from 'react'
import axios from 'axios';
const urlCategoria = 'http://localhost:8000/api/v0/allcategory';


export const useGetCategory = () => {

    const [category, setCategory] = useState([]);

    const [isUpdate, setIsUpdate] = useState(false);

    const listCategory = async () => {

        const resCategory = await axios.get(urlCategoria);
        
        const { Data } = resCategory.data;

        setCategory(Data)
    }

    useEffect(() => {
        listCategory();
    }, []);

    useEffect(() => {
        if(isUpdate){
            listCategory();
            setIsUpdate(false);
        }
    }, [isUpdate]);
    

    return{
        category,
        setCategory,
        setIsUpdate
    }
}
