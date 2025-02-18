import React, { use } from 'react'
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';


// introduz parametros para passagem-destruturação vide txt
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
    // outro exemplo de destruturação pegando um dos valores do objeto retornado pela funcao useLocation
    // essa logica toda é para validar se está na home ou não para apenas deixar de mostrar um layer/path que é o mostrar tudo
    const { pathname } = useLocation();
    // declarando o booleano para validar se eseta na home
    const isHome = pathname === "/";
    //  aqui acontece uma validação , se está na home ele retorna um numero limitado de itens senao me retorna todos os items disponiveis
    const finalItem = isHome ? items : Infinity;
    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>

                {isHome ? (
                    <Link to={path} className="item-list__link">
                        Mostrar tudo
                    </Link>
                ) : (
                    <></>
                )}
            </div>

            <div className="item-list__container">
                {itemsArray
                    .filter((currentValue, index) => index < finalItems)
                    .map((currObj, index) => (
                        <SingleItem
                            // id={currObj.id}
                            // name={currObj.name}
                            // image={currObj.image}
                            // banner={currObj.banner}
                            {...currObj}
                            idPath={idPath}
                            key={`${title}-${index}`}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ItemList;
