"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateRecipe = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const recipeId = searchParams.get("id");

  const [post, setPost] = useState({ title: "", description: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(`/api/recipe/${recipeId}`);
      const data = await response.json();

      setPost({
        title: data.title,
        description: data.description,
        tag: data.tag,
      });
    };

    if (recipeId) getRecipeDetails();
  }, [recipeId]);

  const updateRecipe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!recipeId) return alert("Missing recipeId!");

    try {
      const response = await fetch(`/api/recipe/${recipeId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          description: post.description,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Modifier'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateRecipe}
    />
  );
};

export default UpdateRecipe;