import { addRecipe, getRecipes } from "@app/utils";

export const POST = async (request) => {
    const { userId, title, description, tag } = await request.json();
    try {

        let newRecipe = {
            id: Math.max(...getRecipes().map(recipe => recipe.id)) + 1,
            title,
            description,
            creatorId: userId,
            tag
        }

        addRecipe(newRecipe, getRecipes());
        
        return new Response(JSON.stringify(newRecipe), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new recipe", { status: 500 });
    }
}