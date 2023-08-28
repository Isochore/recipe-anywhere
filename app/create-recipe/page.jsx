"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateRecipe = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", description: "", tag: "" });

  const createRecipe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
    const response = await fetch("/api/recipe/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          description: post.description,
          userId: session?.user.id,
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
      type='Créer'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createRecipe}
    />
  );
};

export default CreateRecipe;