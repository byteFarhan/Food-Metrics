import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa6";
import { RiFireLine } from "react-icons/ri";
const Recipe = ({ recipe, handleWantToCook }) => {
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
      <div className="flex flex-col p-5 border border-[#28282833] rounded-md lg:p-6 space-y-6">
        <figure className="">
          <img
            src={recipe_image}
            alt={recipe_name}
            className="object-cover w-full rounded-md h-[200px]"
          />
        </figure>
        <div className="flex-grow space-y-6">
          {/* <div className=""> */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-title">{recipe_name}</h2>
            <p className="leading-normal text-gray">{description}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-medium text-title">
              Ingredients:{" "}
              {ingredients.length < 10
                ? "0" + ingredients?.length
                : ingredients?.length}
            </h4>
            {/* <div className=""> */}
            <ul className="list-disc *:ml-7 text-gray">
              {ingredients?.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            {/* </div> */}
          </div>
          {/* </div> */}
        </div>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 text-[#282828cc]">
            <p className="text-lg">
              <FaRegClock />
            </p>
            <p>{preparing_time} minutes</p>
          </span>
          <span className="flex items-center gap-2 text-[#282828cc]">
            <p className="text-lg">
              <RiFireLine />
            </p>
            <p>{calories} calories</p>
          </span>
        </div>
        <div className="">
          <button
            onClick={() => handleWantToCook(recipe)}
            className="btn bg-[#0BE58A] hover:bg-[#0BE58A] text-lg font-semibold rounded-full"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </>
  );
};

export default Recipe;
Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};
