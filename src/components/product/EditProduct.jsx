
import { useEffect } from 'react'
import {Modal,Form,Alert,Button} from 'react-bootstrap'



export const EditProduct = ({isOpen,close,value}) => {
    useEffect(()=>{
        if(!isOpen){
            
        }
    },[isOpen]);

  return (

    <Modal show={isOpen} onHide={close}>
        <h1>{JSON.stringify(value) }</h1>
    </Modal>
    
  )
}
