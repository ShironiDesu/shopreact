import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./product-item/productitem";
import CreateCarForm from "./create-product-form/CreateCarForm";
import ResponsiveAppBar from "../../ui/navbar";
import SearchBar from "./search-bar/SearchBar";

function Home() {
  const [cards, setCard] = useState([
    {
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
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  ]);
  console.log(cards);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        setCard(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const filteredProducts = useMemo (
  //   () => cards.filter(card=>card.price>800),[])

  // const createCard = useEffect(() => {
  //   axios
  //     .post(`https://dummyjson.com/products`{

  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       setCard(response.data.products);
  //     })
  // }, []);

  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <SearchBar setCard={setCard} />
      <h1>Catalog</h1>

      <CreateCarForm setCard={setCard} />

      <div className={styles.flexbox}>
        {cards.length ? (
          cards.map((card) => <ProductItem key={card.id} card={card} />)
        ) : (
          <p>There is no products</p>
        )}
      </div>
    </>
  );
}
export default Home;
