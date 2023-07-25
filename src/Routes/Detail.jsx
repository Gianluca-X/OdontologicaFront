import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentists} = useContext(ContextGlobal)
  const { id } = useParams();

  return (
    <>
      <h1>Detail Dentist {id} </h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

      {dentists
        .filter((dentist) => dentist.id === parseInt(id))
        .map((dentist) => (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
          ))}

       
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail