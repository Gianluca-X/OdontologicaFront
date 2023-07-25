import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useContext(ContextGlobal)
  console.log(favs);

  return (
    <>
      <h1>Dentists Favs</h1>
      {favs.length === 0 ? (
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Parece que aún no tienes dentistas favoritos!
        </h3>
      ) : (    
        <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs?.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              username={dentist.username}
              name={dentist.name}
            />
          ))}
      </div>
      )}
    </>
  );
};

export default Favs;
