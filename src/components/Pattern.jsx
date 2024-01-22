import React from "react";
import { Link, NavLink } from "react-router-dom";

function Pattern() {
  return (
    <><div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      <div className="card w-50 text-center m-5 p-3 shadow-sm" style={{width: "18rem",backgroundColor: "#EEE7DA"}}>
        <div className="card-body">
          <h5 className="card-title">Sende örmek ister misin?</h5>
          <p className="card-text">
          Yapman gereken çok basit, örgüseverlerin hazırladığı 
          tarifleri incele:
          </p>
          <button  className="btn" style={{ backgroundColor: "#82ba8e" }}>
          
                    <NavLink className="nav-link" to="/categories">
                      Tarif İncele
                    </NavLink>
          </button>
        </div>
      </div></div>
    </>
  );
}

export default Pattern;
