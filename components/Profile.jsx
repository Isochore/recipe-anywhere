import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {

const [searchText, setSearchText] = useState("");
const [searchTimeout, setSearchTimeout] = useState(null);
const [searchedResults, setSearchedResults] = useState([]);

  const filterRecipes = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return data.filter(
      (item) =>
        regex.test(item.title) ||
        regex.test(item.description) ||
        regex.test(item.tag)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterRecipes(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterRecipes(tagName);
    setSearchedResults(searchResult);
  };

  return (

    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-left'>
        <span>{name} </span>
        <span className='orange_gradient'>recettes</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <div className="feed">
        <form className='max-w-[36rem] relative w-full flex-center'>
        <input
            type='text'
            placeholder='Rechercher une recette...'
            value={searchText}
            onChange={handleSearchChange}
            required
            className='search_input peer'
        />
        </form>
        {searchText ? (
        <div className='mt-8 recipe_layout'>
            {searchedResults.map((post) => (
            <RecipeCard
                key={post.id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
                handleTagClick={handleTagClick}
            />
            ))
        }
        </div>)
        :(<div className='mt-8 recipe_layout'>
            {data.map((post) => (
            <RecipeCard
                key={post.id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
                handleTagClick={handleTagClick}
            />
            ))}
        </div>)}
      </div>
    </section>
  );
};

export default Profile; 