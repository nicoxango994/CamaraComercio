import React from "react";

export const Notice = ({ notice }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={notice.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{notice.title}</h5>
          <p className="card-text">{notice.text}</p>
          {/* Aquí deberías importar Link desde react-router-dom */}
          {/* Ejemplo: import { Link } from 'react-router-dom'; */}
          {/* y luego utilizarlo */}
          {/*<Link to="/" className="btn btn-primary">
            Volver a inicio
  </Link>*/}
        </div>
      </div>
    </>
  );
};
