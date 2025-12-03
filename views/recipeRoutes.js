import express from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../controllers/recipeController.js";

 const router=express.Router();

 router.post("/create",createRecipe);
 router.get("/getData",getAllRecipes);
 router.get("/getData/:id",getRecipeById);
 router.put("/update/:id",updateRecipe);
 router.delete("/delete/:id",deleteRecipe);
 export default router;