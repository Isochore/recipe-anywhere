"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const RecipeCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className='recipe_card'>
        <div className="h-48 container overflow-hidden flex items-center rounded-lg">
            <Image 
                src={post.image} 
                alt={post.title} 
                width={500}
                height={300}
            />
        </div>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={() => router.push(`/recipe/${post.id}`)}
        >

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-lg text-gray-900 mt-6'>
              {post.title}
            </h3>
          </div>
        </div>
      </div>

      <p className='my-2 font-satoshi text-sm text-gray-700 overflow-hidden line-clamp-2'>{post.description}</p>
      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {1 === post.creatorId && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-8 sm:gap-4 border-t border-gray-100 pt-3'>
          <button
            className='font-inter sm:text-sm text-white w-32 h-12 sm:w-24 sm:h-8 rounded-lg bg-amber-500'
            onClick={handleEdit}
          >
            Modifier
          </button>
          <button
            className='font-inter sm:text-sm text-white w-32 h-12 sm:w-24 sm:h-8 rounded-lg bg-[#e70000]'
            onClick={handleDelete}
            aria-label="supprimer"
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;