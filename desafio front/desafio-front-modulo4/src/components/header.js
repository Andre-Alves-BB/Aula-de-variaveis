import React from "react";
import polygon from "../assets/Polygon 1.svg"
import polygon2 from "../assets/Polygon 2.svg"
import profile from "../assets/profile-img.svg"
import unlog from "../assets/unlog.svg"

const header = () => {
    return (
        <header>
            <img className="img-poligono" src={polygon} alt="poligono" />
            <img className="img-poligono2" src={polygon2} alt="poligono" />
            <h1 className="h1-header">Dindin</h1>
            <div className="div-perfil">
                <div className="perfil">
                    <img className="img-perfil" src={profile} alt="profile" />
                </div>
                <ul>Daniel</ul>
                <img className="img-deslog" src={unlog} alt="deslogar" />
            </div>
        </header>
    );
};

export default header;