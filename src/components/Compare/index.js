import React from 'react'
import './styles.css'

const Compare = ({products}) =>
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {products.map(product =>
              <th key={product.id}>
                {product.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">Colors</th>
            {products.map(product =>
              <td key={product.id}>
                {product.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color} />
                )}
              </td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">Size</th>
            {products.map(product =>
              <td key={product.id} className={product.condition === "S, M, L" ? "bg-green" : "bg-blue"}>
                {product.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default Compare
