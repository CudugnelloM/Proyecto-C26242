import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
                    

        fetch("/data/products.json")
            .then((response) => response.json())
            .then((data) => {
                const item = data.find((product) => String(product.id) === String(parseInt(id)));
                if (item) {
                    setProduct(item);
                    return item;
                }
                throw new Error("Elemento no encontrado");    
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);
    if (loading)return <p>Cargando...</p>;
    
    if (error) return <p>Error: {error}</p>;
    
    if (!product) return <p>No se encontró el producto.</p>;
  return <>
    <section>
        
        <div className="products-container">
            <ItemDetail product={product} />
        </div>
    </section>
  </>
};