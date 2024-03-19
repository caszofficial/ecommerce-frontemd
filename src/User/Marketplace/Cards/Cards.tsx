
import "./Cards.css";
import { useGetProducts } from "../../../Hooks/useGetProducts";

const Cards = () => {
 
    const {products} = useGetProducts()


  return (
    <div className="parentContainer">
      <div className="cardContainer">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <div className="imageContainer">
              <img className="cardImage" src={p.image} alt="Not Found" />
            </div>
            <div className="cardName">{p.name}</div>
            <div className="cardPrice">$ {p.price}</div>
            <div className="cardStock">Left in stock: {p.quantity}</div>
            <div className="addToCart">
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
