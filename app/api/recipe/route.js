import { getRecipes } from "@app/utils";


export const GET = async (request) => {
    try {
        return new Response(JSON.stringify(getRecipes()), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all recipes", { status: 500 })
    }
} 