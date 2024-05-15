import { Link } from "react-router-dom";
import styles from "../Home.module.css";
import StarIcon from "@mui/icons-material/Star";

function ProductItem({ card }: any) {
  return (
    <div key={card.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${card.thumbnail})`,
        }}
      />
      <div className={styles.info}>
        <h2>{card.title}</h2>
        <h4>
          {card.rating} <StarIcon />
        </h4>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(card.price)}
        </p>
        <Link className="btn" to={`/products/${card.id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}
export default ProductItem;
