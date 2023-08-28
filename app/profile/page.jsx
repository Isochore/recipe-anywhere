"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();


  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.name) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-recipe?id=${post.id}`);
  };

  const handleDelete = async (post) => {

    Swal.fire({
        title: 'Es-tu sûr(e) de vouloir supprimer cette recette ?',
        text: "Tu ne pourras plus la récupérer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e70000',
        cancelButtonColor: 'lightgrey',
        confirmButtonText: 'Supprimer',
        cancelButtonText: "Annuler",
      }).then((result) => {
        if (result.isConfirmed) {
            try {
                fetch(`/api/recipe/${post.id.toString()}`, {
                    method: "DELETE",
                });
        
                const filteredPosts = myPosts.filter((item) => item.id !== post.id);
        
                setMyPosts(filteredPosts);
                Swal.fire({
                    title: 'Recette supprimée',
                    confirmButtonColor: 'orange',
                })
                } catch (error) {
                console.log(error);
                }
        }
      })

    // const hasConfirmed = confirm(
    //   "Êtes-vous sûr de vouloir supprimer cette recette ?"
    // );

    // if (hasConfirmed) {
    //   try {
    //     await fetch(`/api/recipe/${post.id.toString()}`, {
    //       method: "DELETE",
    //     });

    //     const filteredPosts = myPosts.filter((item) => item.id !== post.id);

    //     setMyPosts(filteredPosts);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (

    <Profile
      name="Mes"
      desc="Bienvenue sur ta page personnelle. Partage tes recettes et inspire d'autres aventuriers culinaires."
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;