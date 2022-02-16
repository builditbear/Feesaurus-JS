/**
 * Renders a select menu populated by a list of options passed in by parent component.
 * @param {Object} props Provides a name for the attribute this menuSelector is associated
 * with, an array of options to be rendered, and a function for handling changes to the property
 * associated with the select menu.
 */
export default function MenuSelector({ name, attrOptions, dispatch }) {
  let optionsList = attrOptions.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <select
      name={name}
      onChange={(e) => dispatch({ type: name, value: e.target.value })}
    >
      {optionsList}
    </select>
  );
}
