import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists } = useContext(ContextGlobal)
    return (
    <main className="" >
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentists.map(dentist=>{
          return (
            <Card {...dentists} id={dentist.id}
                  name={dentist.name}
                  username={dentist.username}
                  />
                  )})}
     </div>
    </main>
  )
}

export default Home