import { useState, useEffect } from 'react'
import axios from 'axios';
const urlCategoria = 'http://localhost:8000/api/v0/allcategory';


export const useGetCategory = () => {

    const [category, setCategory] = useState([]);

    const listCategory = async () => {

        const resCategory = await axios.get(urlCategoria);
        
        const { Data } = resCategory.data;

        setCategory(Data)
    }

    useEffect(() => {
        listCategory();
    }, []);

    return{
        category
    }
}
