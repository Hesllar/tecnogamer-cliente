import React from 'react'
import { useState } from 'react';
import {  Col, Spinner } from 'react-bootstrap';


export const UserAdminList = ({data, isLoading, setIsUpdate}) => {

  console.log(data)
  const [value, setValue] = useState();
  return (
    <>
    <Col>
      {   
          (data.length === 0) ?   (<Spinner animation="border" />)
                      :   (
                          <>
                              <ul className="list-group">
                                  {
                                      data.map(user => (
                                          <li key={user._id} className="list-group-item d-flex justify-content-between">
                                              <span  className="align-self-center">
                                                  {user.nombreUsuario}
                                              </span> 
                                              <button className='btn btn-primary'  onClick={() => {
                                                  setValue(user);
                                                  openEditarPM();}}>Editar</button>
                                              <button className='btn btn-danger' onClick={() => {
                                                  setValue(user._id);
                                                  openDeletePM();}}>Borrar</button>
                                          </li> 
                                      ))
                                  }
                              </ul>
                          </>
                          )
      }
    </Col>
    </>
  )
}

