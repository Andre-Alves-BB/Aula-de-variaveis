import React from "react";
import fechar from "../assets/fechar.svg";

const adicionarRegistro = () => {
    return (
        <div className="modal-registro">
            <div className="div-registro">
                <h1>Adicionar Registro <img src={fechar} alt="Fechar" /></h1>
                <div>
                    <button>Entrada</button>
                    <button>Saida</button>
                </div>
                <label>Valor</label>
                <input type="text"></input>
                <label>Categoria</label>
                <input type="selected">
                    <option value="Alimentação">Alimentação</option>
                    <option value="Assinaturas e Serviços">Assinaturas e Serviços</option>
                    <option value="Casa">Casa</option>
                    <option value="Compras">Compras</option>
                    <option value="Cuidados Pessoais">Cuidados Pessoais</option>
                    <option value="Educação">Educação</option>
                </input>
            </div>
        </div>
    );
};

export default adicionarRegistro;