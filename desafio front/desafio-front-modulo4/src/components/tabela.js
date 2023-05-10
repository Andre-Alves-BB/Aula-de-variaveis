import React from "react";
import Filtrar from "../assets/filtrar.svg";
import Data from "../assets/data-tabela.svg";



const tabela = () => {
    return (
        <div className="bordas">
            <div className="filtrar">
                <img src={Filtrar} alt="Filtrar" />
                <li>Filtrar</li>
            </div>
            <main className="main-tabela">
                <table className="tabela">
                    <tr >
                        <td className="coluna fontes700">Data <img src={Data} /></td>
                        <td className="coluna fontes700">Dia da Semana</td>
                        <td className="coluna fontes700">Descrição</td>
                        <td className="coluna fontes700">Categoria</td>
                        <td className="coluna fontes700">valor</td>
                        <td className="coluna fontes700"></td>
                    </tr>
                    <tr >
                        <td className="fontes700 ">data</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes700">12</td>
                        <td>imagem</td>
                    </tr>
                    <tr >
                        <td className="fontes700 ">data</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes700">12</td>
                        <td>imagem</td>
                    </tr>
                    <tr >
                        <td className="fontes700 ">data</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes700">12</td>
                        <td>imagem</td>
                    </tr>
                    <tr >
                        <td className="fontes700 ">data</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes700">12</td>
                        <td>imagem</td>
                    </tr>
                    <tr >
                        <td className="fontes700 ">data</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes400">api</td>
                        <td className="fontes700">12</td>
                        <td>imagem</td>
                    </tr>
                </table>
                <div className="div-resumo">
                    <h1 className="h1-resumo rubik700">Resumo</h1>
                    <div className="conteudo-resumo">
                        <li className="li-resumo rubik500">Entradas</li>
                        <li className="li-resumo rubik500">adfadf</li>
                        <li className="li-resumo rubik500">Saidas</li>
                        <li className="li-resumo rubik500">adfadf</li>
                        <li className="rubik700">saldo</li>
                        <li>adfadf</li>
                    </div>
                    <button className="adicionarRegistro">Adicionar Registros</button>
                </div>
                <div className="apagarItem">
                    <h1 className="h1Apagar">Apagar Item?</h1>
                    <div className="botoes">
                        <button className="botaoAzul">Sim</button>
                        <button className="botaoRosa">Não</button>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default tabela