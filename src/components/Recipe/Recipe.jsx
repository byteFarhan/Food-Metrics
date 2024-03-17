const Recipe = ({ recipe }) => {
  //   console.log(recipe);
  const {
    recipe_image,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <>
      <div className="p-5 border border-[#28282833] rounded-md lg:p-6">
        <figure className="">
          <img
            src={recipe_image}
            alt={recipe_name}
            className="object-cover w-full rounded-md"
          />
        </figure>
        <div className="">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{recipe_name}</h2>
            <p className="text-[#878787] leading-normal">{description}</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xl font-medium">
              Ingredients: {ingredients?.length}
            </h4>
            <div className="flex-grow">
              <ul className="list-disc list-inside">
                {ingredients?.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <span>{preparing_time} minutes</span>
            <span>{calories} calories</span>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#0BE58A] hover:bg-[#0BE58A] font-semibold rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
