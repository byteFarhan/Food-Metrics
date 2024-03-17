const WantToCook = ({ recipe, counter }) => {
  const { recipe_name, preparing_time, calories } = recipe;
  return (
    <>
      <tr>
        <th>{counter}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </>
  );
};

export default WantToCook;
