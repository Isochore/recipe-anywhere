import { updateRecipeById, getRecipes, removeRecipeById } from "@app/utils";

export const GET = async (request, { params }) => {
    try {
        const recipe = getRecipes().filter(item => item.id === parseInt(params.id));
        if (!recipe) return new Response("Recipe Not Found", { status: 404 });

        return new Response(JSON.stringify(recipe[0]), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { title, description, tag } = await request.json();

    try {            
            const updatedRecipe = {
                title,
                description,
                tag
            };

            updateRecipeById(params.id, updatedRecipe, getRecipes());

        return new Response("Successfully updated the Recipes", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Recipe", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        removeRecipeById(parseInt(params.id), getRecipes());

        return new Response("Recipe deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting recipe", { status: 500 });
    }
};