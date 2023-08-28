"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


const Account = () => {
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

  }, [session?.user.name]);

  return (

    <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-left'>
                <span>Mes </span>
                <span className='orange_gradient'>informations</span>
            </h1>
            <div className="mt-10 w-full max-w-2xl flex glassmorphism justify-between">
                <div className="flex w-full flex-wrap justify-between">
                    <div className="w-1/2">
                        <p className='w-full font-satoshi font-semibold text-lg text-gray-700'>Prénom</p>
                        <p className='mt-2 text-base text-gray-600 max-w-2xl'>{session?.user?.name}</p>
                    </div>
                    <div className="w-1/2">
                        <p className='w-full font-satoshi font-semibold text-lg text-gray-700'>Nom</p>
                        <p className='mt-2 text-base text-gray-600 max-w-2xl'>{session?.user?.lastName}</p>
                    </div>
                    <div className="w-full">
                        <p className='w-full font-satoshi font-semibold text-lg text-gray-700'>Adresse email</p>
                        <p className='mt-2 text-base text-gray-600 max-w-2xl'>{session?.user?.email}</p>
                    </div>
                </div>
                <Image 
                className="w-1/3 rounded-lg"
                src={session?.user?.image} 
                alt="image de profil" 
                width={500}
                height={300}
                />
            </div>
      
    </section>
  );
};

export default Account;