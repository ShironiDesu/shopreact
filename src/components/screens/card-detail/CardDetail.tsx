import axios from "axios";
import styles from "./CardDetail.module.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

function CardDetail() {
  const { id } = useParams();
  const [cardInfo, SetcardInfo] = useState({
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  });
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        SetcardInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  //   const info = cardcardInfofind(item => item.id === Number(id))

  return (
    <>
      {/* {cardcardInfo.map((info) => */}
      <div key={cardInfo.id} className={styles.item}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${cardInfo.thumbnail})`,
          }}
        />
        <div className={styles.info}>
          <h2>{cardInfo.title}</h2>
          <h2>{cardInfo.description}</h2>
          <h4>{cardInfo.brand}</h4>
          <h4>{cardInfo.category}</h4>
          <h4>
            {cardInfo.rating} <StarIcon />
          </h4>
          <h4>{cardInfo.stock}</h4>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(cardInfo.price)}
          </p>
        </div>
      </div>
      <Link className="btn" to="/">
        Back
      </Link>
      <Link className="btn" to={`/edit/${id}`}>
        Edit
      </Link>
    </>
  );
}
export default CardDetail;
