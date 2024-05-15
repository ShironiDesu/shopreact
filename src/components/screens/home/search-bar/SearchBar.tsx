import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
function SearchBar({ setCard }: any) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    search(query);
  }, []);
  const search = (query = "") => {
    let url = `https://dummyjson.com/products/`;
    if (query) {
      url += `search?q=${query}`;
    }
    axios
      .get(url)
      .then((response) => {
        setCard(response.data.products);
        // console.log(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="standard"
        sx={{ backgroundColor: "#EEE" }}
        onChange={(event) => {
          setQuery(event.target.value);
          console.log(query);
        }}
      />

      <div className="col-auto">
        <button
          className="btn btn-primary mb-3"
          onClick={(event) => {
            event.preventDefault();
            search(query);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
export default SearchBar;
