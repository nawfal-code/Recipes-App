import Recipe from "../models/recipeSchema.js";



//CRUD OPERATION


//Create a new recipe.


export const createRecipe=async(req,res)=>{
   try {
     const newRecipe=new Recipe(req.body);
     await newRecipe.save(); 
     res.status(200).json({message:"Recipe created succesfully",data:newRecipe});
    }
    catch (error) {
     res.status(503).json({message:"Failed to Create Recipe"});    
   }
}



//Retrieve all recipes.


export const getAllRecipes=async(req,res)=>{
    try{
        const AllRecipes=await Recipe.find();
        res.status(200).json({message:"All Recipes Retrieved Succesfully",data:AllRecipes});
    }
    catch (error) {
     res.status(503).json({message:"Failed to Retrieve all Recipes"});    
   }
}


 //Retrieve a single recipe by ID


export const getRecipeById=async(req,res)=>{
    try {
      const id=req.params.id;
      const selectRecipe=await Recipe.findById(id);
      res.status(200).json({message:"Recipe Retrieved by ID Succesfully",data:selectRecipe});
    }
     catch (error) {
             res.status(503).json({message:"Failed to Retrieve  Recipe by ID"});    
    }
}


//Update a recipe by ID.

export const updateRecipe=async(req,res)=>{
   try {
   const id=req.params.id;
   const{name,ingredients,instructions,duration}=req.body;
   const result=await Recipe.findByIdAndUpdate({_id:id},{name,ingredients,instructions,duration},{new:true});
   if(!result){
    return res.status(404).json({message:"Recipe Not Available"});
   } 
      res.status(200).json({message:"Recipe updated by ID Succesfully",data:result});
} 
   catch (error) {
                 res.status(503).json({message:"Failed to update  Recipe by ID"});    
   }
}

//Delete a recipe by ID.

export const deleteRecipe = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Recipe.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Recipe Not Available" });
    }

    const Rec = await Recipe.find();

    res.status(200).json({
      message: "Recipe deleted successfully",
      data: Rec
    });

  } catch (error) {
    res.status(500).json({ message: "Failed to delete Recipe by ID" });
  }
};
