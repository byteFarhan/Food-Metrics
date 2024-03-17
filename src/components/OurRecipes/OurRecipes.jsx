import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../WantToCook/WantToCook";

const OurRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [orderedRecipes, setOrderedRecipes] = useState([]);
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
  const handleWantToCook = (recipe) => {
    // orderedRecipesCounts += 1;
    // setOrderedRecipesCounts(orderedRecipesCounts++);
    // console.log(orderedRecipesCounts);
    // console.log(recipe);
    const newOrderedRecipes = [recipe, ...orderedRecipes];
    // console.log(newOrderedRecipes);
    setOrderedRecipes(newOrderedRecipes);
    // console.log(orderedRecipes);
  };
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
                handleWantToCook={handleWantToCook}
                // orderedRecipesCounts={orderedRecipesCounts}
              />
            ))}
          </div>
          <div className="lg:col-span-3">
            <div className="p-6 border-2 rounded-md">
              <div>
                <h3>Want to cook: {orderedRecipes?.length}</h3>
                <div className="overflow-x-auto">
                  <table className="table table-xs table-pin-cols table-pin-rows ">
                    <thead>
                      <tr>
                        <th></th>
                        <td>Name</td>
                        <td>Time</td>
                        <td>Calories</td>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderedRecipes?.map((orderedRecipe, idx) => (
                        <WantToCook
                          key={idx}
                          recipe={orderedRecipe}
                          counter={idx + 1}
                          //   orderedRecipesCounts={orderedRecipesCounts}
                        />
                      ))}
                      <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Littel, Schaden and Vandervort</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th></th>
                        <td>Name</td>
                        <td>Job</td>
                        <td>company</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRecipes;
