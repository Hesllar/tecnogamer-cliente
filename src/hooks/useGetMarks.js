import { useState, useEffect } from 'react'
import axios from 'axios';
const urlMarca = 'http://localhost:8000/api/v0/allmark';

export const useGetMarks = () => {
    const [mark, setMarca] = useState([]);

    const [isUpdate, setIsUpdate] = useState(false);

    const listMark = async () => {

        const resMark = await axios.get(urlMarca);

        const { Data } = resMark.data;

        setMarca(Data)
    }

    useEffect(() => {
      listMark();
    }, []);

    useEffect(() => {
        if(isUpdate){
            listMark();
            setIsUpdate(false);
        }
    }, [isUpdate]);
    

    return{
        mark,
        setMarca,
        setIsUpdate
    }
}
