const CurrentlyCooking = ({ recipe, counter }) => {
  const { recipe_name, preparing_time, calories } = recipe;
  return (
    <>
      <tr className="rounded-md bg-base-200 text-gray">
        <th>{counter}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} minutes</td>
        <td>{calories} calories</td>
      </tr>
    </>
  );
};

export default CurrentlyCooking;
