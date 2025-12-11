import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const finalItems = isHome ? items : Infinity;

  // 🔥 GARANTE QUE itemsArray SEMPRE SEJA ARRAY
  const safeArray = Array.isArray(itemsArray) ? itemsArray : [];

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome && (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        )}
      </div>

      <div className="item-list__container">
        {safeArray
          .slice(0, finalItems) // 🔥 MELHOR QUE filter(index < finalItems)
          .map((currObj) => (
            <SingleItem
              id={currObj._id}      // Agora usa o ID real vindo do banco
              {...currObj}
              idPath={idPath}
              key={currObj._id}     // Chave estável
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
