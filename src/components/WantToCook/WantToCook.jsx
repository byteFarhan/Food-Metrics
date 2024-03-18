import PropTypes from "prop-types";
const WantToCook = ({ recipe, counter, handlePreparing }) => {
  const { recipe_name, preparing_time, calories } = recipe;
  return (
    <>
      <tr className="rounded-md bg-base-200 text-gray">
        <th>{counter}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
        <td>
          <button
            onClick={() => handlePreparing(recipe)}
            className="py-2 px-4 font-lexend bg-[#0BE58A] hover:bg-[#0BE58A] font-medium rounded-full text-dark"
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

export default WantToCook;
WantToCook.propTypes = {
  recipe: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};
