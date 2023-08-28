import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Découvre et partage tes
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Recettes de cuisine</span>
    </h1>
    <p className='desc text-center'>
      Recipe Anywhere est un livre de recette participatif pour
      découvrir, créer et partager des recettes.
    </p>

    <Feed />
  </section>
);

export default Home;