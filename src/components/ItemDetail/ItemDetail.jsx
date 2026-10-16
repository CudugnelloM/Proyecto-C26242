
import './ItemDetail.css';


export const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <img src={product.image} alt={product.name} />
        <div className="item-detail-info">    
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-button">Agregar al carrito</button>

            </div>
         </div>    
    );
};