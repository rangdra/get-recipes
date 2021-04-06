import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "8c0d7573";
  const APP_KEY = "c6a60551db5a9800bf0bec55b21869a2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <form id="form" className="my-5 w-75 mx-auto" onSubmit={getSearch}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search recipe..."
            aria-describedby="button-addon2"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div className="row">
        {recipes?.map((item, idx) => (
          <div className="col-md-6 col-sm-12 mb-5">
            <Recipe
              key={idx}
              image={item?.recipe?.image}
              label={item?.recipe?.label}
              ingredients={item?.recipe?.ingredients}
              calories={item?.recipe?.calories}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
