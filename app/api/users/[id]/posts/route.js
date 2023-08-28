import { getRecipes } from "@app/utils";

export const GET = async (request, { params }) => {

    try {
        const posts = getRecipes().filter((recipe) => recipe.creatorId === parseInt(params.id));

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch recipes created by user", { status: 500 })
    }
} 