import './ItemList.css';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';


export const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}> 
          <Item {...product}/>
        </Link>
      ))}
    </div>
  );
};