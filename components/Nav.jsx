"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-4 flex-center'>
        <Image
          src='/assets/images/website-logo.png'
          alt='logo'
          width={20}
          height={20}
          className='object-contain'
        />
        <p className='logo_text'>Recipe Anywhere</p>
      </Link>

      <div className='flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={"/assets/images/profile.png"}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/account'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mon compte
                </Link>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Mes recettes
                </Link>
                <Link
                  href='/create-recipe'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Créer une recette
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                    Router.push("/")
                  }}
                  className='mt-5 w-full text-white bg-amber-500 h-12 sm:h-8 rounded-lg'
                >
                  Se déconnecter
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn();
                  }}
                  className='py-1.5 px-5 text-white text-center bg-amber-500 h-12 sm:h-8 rounded-lg flex items-center justify-center'
                >
                  Se connecter
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;