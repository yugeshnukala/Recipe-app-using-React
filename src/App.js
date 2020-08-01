import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from "./Recipes";

const App = () => {
    const APP_ID = "b35fe4b3";
    const APP_KEY = "e413999098f7d737c00574757fd56bc0";
    const [recipes,setRecipes] = useState([])
    const [search,setSearch] = useState("chicken");
    const [query,setQuery] = useState(search);

    useEffect(() => {
      getRecipes();
    },[query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
      const data = await response.json();
      // console.log(data.hits);
      setRecipes(data.hits);
    }

    const handleSearch = (event) => {
      setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setQuery(search);

    }

    return (
      <div className="App">
        <form onSubmit={handleSubmit} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={handleSearch} />
          <input className="search-button" type="submit" />
        </form>
        <div className="recipes">
        {
          recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          imageurl={recipe.recipe.image} 
          ingredients = {recipe.recipe.ingredients}
        />
        ))}
        </div>
      </div>
    );
} 

export default App;
