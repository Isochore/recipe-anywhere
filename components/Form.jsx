import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-center flex-col'>
      <h1 className='head_text text-left'>
        <span>{type} la </span>
        <span className='orange_gradient'>recette</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} et partagez vos recettes préférées avec la communauté.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-lg text-gray-700'>
            Titre
          </span>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type='text'
            placeholder='Titre'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-lg text-gray-700'>
            Description de la recette
          </span>

          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder='Écrivez votre recette ici'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-lg text-gray-700'>
            Tags{" "}
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#vegan'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4 sm:gap8'>
          <Link href='/' className='text-gray-500 sm:text-sm w-32 h-12 sm:w-24 sm:h-8 flex justify-center items-center rounded-lg'>
            Annuler
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 sm:text-sm bg-amber-500 w-32 h-12 sm:w-24 sm:h-8 rounded-lg text-white'
          >
            {submitting ? `Chargement...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;