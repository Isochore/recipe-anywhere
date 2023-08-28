"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const RecipeDetail = ({ params }) => {
  const router = useRouter();
  const { data: session } = useSession();


  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchPosts = async () => {

    const response = await fetch("/api/recipe");
    const data = await response.json();

    setRecipe(await data.filter((item) => item.id === parseInt(params.id)));
    setIsLoading(false);
};

useEffect(() => {
    fetchPosts();
  }, []);
useEffect(() => {
  }, [recipe]);

  return (

    <section className='w-full flex-center flex-col'>
    {/* <h1 className='head_text text-left'> */}
        {/* <span>La </span>
        <span className='orange_gradient'>recette</span> */}
    {/* </h1> */}

    <article className='mt-10 w-full max-w-2xl flex flex-col gap-6 glassmorphism' >
        <p className="font-satoshi font-semibold text-xl text-gray-700">{recipe[0]?.title}</p>
        <div className="h-64 w-full container overflow-hidden flex items-center rounded-lg">
            {recipe[0] ? <Image 
                src={recipe[0]?.image} 
                alt={recipe[0]?.title} 
                width={1000}
                height={700}
            /> : ""}
        </div>
        <p className="mt-2 text-base font-light text-gray-600 max-w-2xl">{recipe[0]?.description}</p>
        <p className="mt-2 text-base text-gray-600 max-w-2xl">{`#${recipe[0]?.tag}`}</p>
    </article>
  </section>
  );
};

export default RecipeDetail;