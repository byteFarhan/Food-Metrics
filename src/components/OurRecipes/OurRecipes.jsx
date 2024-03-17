import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const OurRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  //   let [orderedRecipesCounts, setOrderedRecipesCounts] = useState(0);
  //   let orderedRecipesCounts = 0;
  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
    // const featchRecipes = async () => {
    //   const res = await fetch("/data/data.json");
    //   const data = await res.json();
    //   setRecipes(data);
    //   console.log(recipes);
    // };
  }, []);
  //   console.log(recipes);

  return (
    <>
      <section className="my-12">
        <div className="w-2/3 mx-auto space-y-4 text-center *:leading-normal mb-12">
          <h2 className="text-5xl font-semibold">Our Recipes</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
          <div className="grid grid-cols-1 gap-6 lg:col-span-4 md:grid-cols-2">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                // orderedRecipesCounts={orderedRecipesCounts}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRecipes;
