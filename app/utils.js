let recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Les Spaghetti Carbonara sont un plat de pâtes classique italien qui met en valeur une sauce crémeuse à base d'œufs, de fromage, de pancetta et de poivre noir. Les pâtes sont cuites jusqu'à ce qu'elles soient parfaitement al dente, puis mélangées avec la sauce délicieuse, créant ainsi une harmonie de saveurs et de textures. Ce plat réconfortant est apprécié depuis des générations en Italie et dans le monde entier. Que vous célébriez une occasion spéciale ou que vous ayez simplement envie d'un repas copieux, les Spaghetti Carbonara sauront satisfaire vos papilles et vous donneront envie d'en reprendre. Servez-les avec une pincée de Parmesan fraîchement râpé et une garniture de persil haché pour une touche authentique.",
      creatorId: 1,
      tag: "Italien",
      image: "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
    },
    {
      id: 2,
      title: "Tacos au Poulet",
      description: "Les Tacos au Poulet sont un mets de rue mexicain très apprécié qui a conquis le cœur des amateurs de cuisine du monde entier. Des morceaux succulents de poulet sont marinés dans un mélange alléchant d'épices, notamment de cumin, de paprika et de piment, avant d'être cuits à la perfection. Le résultat est un poulet tendre et savoureux qui explose en saveurs. Les tacos sont assemblés en enroulant le poulet assaisonné dans des tortillas chaudes, puis en les garnissant d'une variété d'ingrédients frais. De la laitue croquante, des tomates coupées en dés, du fromage râpé et une salsa épicée se combinent pour créer une explosion de saveurs à chaque bouchée. Que vous organisiez une réunion décontractée ou que vous ayez simplement envie d'un délicieux dîner, les Tacos au Poulet sont un choix irrésistible.",
      creatorId: 2,
      tag: "Mexicain",
      image: "https://images.unsplash.com/photo-1570461226513-e08b58a52c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3274&q=80"
    },
    {
        id: 3,
        title: "Salade de Quinoa aux Légumes",
        description: "La Salade de Quinoa aux Légumes est un plat sain et équilibré qui associe la texture légère et moelleuse du quinoa avec une variété de légumes frais et croquants. Le quinoa est cuit à la perfection et mélangé avec des concombres, des poivrons, des tomates cerises, des oignons rouges et des herbes aromatiques telles que la coriandre et la menthe. Le tout est ensuite arrosé d'une vinaigrette à base de jus de citron frais, d'huile d'olive et d'épices. Cette salade est non seulement délicieuse, mais aussi nourrissante et pleine de nutriments essentiels. Parfaite comme plat principal pour un déjeuner léger ou comme accompagnement pour un dîner, la Salade de Quinoa aux Légumes est une option savoureuse pour ceux qui recherchent une alimentation saine et colorée.",
        creatorId: 1,
        tag: "Santé",
        image: "https://images.unsplash.com/photo-1615865417491-9941019fbc00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
      },
      {
        id: 4,
        title: "Tarte au Chocolat et Framboises",
        description: "La Tarte au Chocolat et Framboises est une pâtisserie irrésistible qui marie le riche goût du chocolat avec la fraîcheur acidulée des framboises. La croûte croustillante faite maison est garnie d'une ganache au chocolat onctueuse et fondante, qui fond en bouche à chaque bouchée. Les framboises fraîches, disposées avec soin sur la ganache, apportent une note fruitée et acidulée qui équilibre parfaitement la douceur du chocolat. Cette tarte est le dessert parfait pour toutes les occasions, qu'il s'agisse d'un repas entre amis ou d'un dîner romantique. Servie avec une boule de glace à la vanille ou une touche de crème fouettée, la Tarte au Chocolat et Framboises est une explosion de saveurs et de textures qui ravira les amateurs de sucré.",
        creatorId: 2,
        tag: "Dessert",
        image: "https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
      },
      {
        id: 5,
        title: "Ratatouille Provençale",
        description: "La Ratatouille Provençale est un plat traditionnel de la cuisine méditerranéenne qui met à l'honneur une variété de légumes d'été. Les aubergines, les courgettes, les poivrons et les tomates sont coupés en tranches épaisses, puis mijotés ensemble avec des oignons et des herbes provençales. Le résultat est un mélange savoureux et parfumé, où chaque légume conserve sa texture et sa saveur distinctes. La Ratatouille peut être servie en tant qu'accompagnement chaud ou froid, ou même en plat principal accompagné de riz ou de pain frais. Ce plat coloré et réconfortant est une célébration des ingrédients locaux et de la cuisine simple et délicieuse de la région provençale.",
        creatorId: 1,
        tag: "Végétarien",
        image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3340&q=80"
      },
      {
        id: 6,
        title: "Mousse au Chocolat Noir",
        description: "La Mousse au Chocolat Noir est un dessert élégant et indulgent qui séduit les amateurs de chocolat. Cette mousse est préparée en combinant du chocolat noir riche et fondant avec des œufs et une touche de sucre. Le mélange est ensuite fouetté jusqu'à l'obtention d'une texture légère et aérienne. La mousse est servie dans de petites coupes individuelles, garnie de copeaux de chocolat ou de fruits rouges pour une touche de fraîcheur. Sa texture veloutée et son goût intense en font un dessert parfait pour clôturer un repas spécial ou pour satisfaire une envie de chocolat. La Mousse au Chocolat Noir est une invitation à la gourmandise et au plaisir des sens.",
        creatorId: 2,
        tag: "Dessert",
        image: "https://images.unsplash.com/photo-1504388192519-fb4be897c4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
      },
      {
        id: 7,
        title: "Tarte aux Pommes Rustique",
        description: "La Tarte aux Pommes Rustique est une version chaleureuse et décontractée de la célèbre tarte aux pommes. Réalisée avec une pâte brisée maison, elle est garnie de tranches de pommes fondantes et parfumées à la cannelle et à la vanille. Les bords de la pâte sont simplement repliés sur les pommes, créant ainsi une apparence rustique et authentique. Une touche de sucre saupoudré sur le dessus caramélise à la cuisson, apportant une douceur dorée et croquante. Servie tiède avec une boule de glace à la vanille ou une cuillerée de crème fraîche, cette Tarte aux Pommes Rustique incarne le réconfort de la pâtisserie maison et les saveurs intemporelles de l'automne.",
        creatorId: 2,
        tag: "Dessert",
        image: "https://images.unsplash.com/photo-1638329261528-1932b0e63212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3435&q=80"
      },
      {
        id: 8,
        title: "Salade Niçoise Traditionnelle",
        description: "La Salade Niçoise est une salade emblématique de la cuisine méditerranéenne, originaire de la ville de Nice en France. Elle est composée d'une base de laitue fraîche, accompagnée de tomates juteuses, de haricots verts croquants, de pommes de terre cuites, d'œufs durs coupés en quartiers, d'olives noires et de thon en conserve. La salade est ensuite assaisonnée d'une vinaigrette à base d'huile d'olive, de vinaigre, de moutarde et d'herbes fraîches. Cette combinaison d'ingrédients colorés et variés crée une salade équilibrée et nourrissante, parfaite pour les déjeuners estivaux en plein air ou les repas légers. La Salade Niçoise Traditionnelle incarne le mode de vie méditerranéen et les saveurs ensoleillées de la côte française.",
        creatorId: 1,
        tag: "Léger",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3384&q=80"
      }
  ];

const images = ["https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", "https://images.unsplash.com/photo-1571805341302-f857308690e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80", "https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3064&q=80", "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3280&q=80", "https://plus.unsplash.com/premium_photo-1672363353887-d5a9d1a3c8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80", "https://plus.unsplash.com/premium_photo-1673581152308-591c1645be02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80"]


export function addRecipe(newRecipe, recipesList) {
    const randomIndex = Math.floor(Math.random() * images.length);
    newRecipe.image = images[randomIndex];
    recipesList.push(newRecipe); // Add the new recipe to the array
    recipes = recipesList;
    return new Response("Successfully added the recipe", { status: 200 });
}

export function updateRecipeById(id, updatedRecipe, recipesList) {
    const indexToUpdate = recipesList.findIndex(recipe => recipe.id === parseInt(id));
    
    if (indexToUpdate !== -1) {
        recipes[indexToUpdate] = { ...recipesList[indexToUpdate], ...updatedRecipe };
    } else {
        return new Response("Recipe not found", { status: 404 });
    }
    return new Response("Successfully updated the recipe", { status: 200 });
}

export function removeRecipeById(id, recipesList) {
    recipes = recipesList.filter(recipe => recipe.id !== id);

    return new Response("Recipe not found", { status: 404 });
}

export function getRecipes() {
    return recipes;
}


export { recipes };