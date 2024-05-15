import axios from "axios";
import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const CreateCarForm = ({ setCard }: any) => {
  const clearData = {
    name: "",
    price: "",
    image: "",
    category: "",
  };
  const [data, setData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });
  const createCard = (e: any) => {
    e.preventDefault();

    // setCard((prev:any) => [...prev,{id:prev.length + 1, ...data}])
    // setData(clearData)
    axios
      .post("https://dummyjson.com/products/add", data)
      .then((response) => {
        setCard((prev: string | any[]) => [...prev, { ...data }]);
        setData(clearData);
        console.log("Успешно выполнен POST-запрос", response);
      })
      .catch((error) => {
        console.error("Ошибка при выполнении POST-запроса", error);
      });
  };
  return (
    <>
      <form className={styles.form}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={data.name}
        />
        <input
          placeholder="Price"
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          value={data.price}
        />
        <input
          placeholder="Image"
          onChange={(e) =>
            setData((prev) => ({ ...prev, image: e.target.value }))
          }
          value={data.image}
        />
        <input
          placeholder="Category"
          onChange={(e) =>
            setData((prev) => ({ ...prev, category: e.target.value }))
          }
          value={data.category}
        />
        <button className="btn" onClick={(e) => createCard(e)}>
          Create
        </button>
      </form>
    </>
  );
};
export default CreateCarForm;
