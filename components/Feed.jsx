"use client";

import { useState, useEffect } from "react";

import RecipeCard from "./RecipeCard";
import { useSession } from "next-auth/react";
import { recipes } from "@app/utils";

const RecipeCardList = ({ data, handleTagClick }) => {

  const { data: session } = useSession();

  return (
    <div className='mt-8 recipe_layout'>
      {data.map((post) => (
        <RecipeCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {

    const response = await fetch("/api/recipe");
    const data = await response.json();

    setAllPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [recipes]);

  const filterRecipes = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
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
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Rechercher une recette...'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {isLoading ? (<div className="loader">Chargement...</div>) :

      searchText ? (
        <RecipeCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <RecipeCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;