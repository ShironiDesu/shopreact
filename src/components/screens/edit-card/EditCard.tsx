import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditCard() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    id: 0,
    brand: "",
    price: 0,
  });

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(`https://dummyjson.com/products/${id}`, formData);
    console.log(id);
    axios
      .put(`https://dummyjson.com/products/${id}`, formData)
      .then((response) => {
        console.log("Успешно выполнен PUT-запрос", response);
        // Дополнительная обработка успешного ответа
      })
      .catch((error) => {
        console.error("Ошибка при выполнении PUT-запроса", error);
        // Дополнительная обработка ошибки
      });
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <div>
          <TextField
            required
            id="filled-required"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            variant="filled"
          />

          <TextField
            id="filled-password-input"
            label="Category"
            autoComplete="current-password"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="ID"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Brand"
            type="search"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Price"
            defaultValue="Default Value"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            variant="filled"
          />
        </div>
        <button type="submit">Submit</button>
      </Box>
    </>
  );
}

export default EditCard;
