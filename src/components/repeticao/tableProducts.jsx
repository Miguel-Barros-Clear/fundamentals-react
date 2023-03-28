import React from "react";
import produtos from "../../data/products";
import "./tableProducts.css";

export default function TableProducts(props) {
  function getRows() {
    return produtos.map((product, i) => {
      return (
        <tr className={i % 2 == 0 ? "Par" : "Impar"} key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }
  return (
    <div className="TableProducts">
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>preco</th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
    </div>
  );
}
