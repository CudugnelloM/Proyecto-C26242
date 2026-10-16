import "./Item.css";

export const Item = ({ name, description, price, image, children }) => {
  return (
    <article className="item">
      <img src={image} alt={name} />
      <div className="item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Precio: ${price.toFixed(2)}</p>
      </div>

      {children}
    </article>
  );
};