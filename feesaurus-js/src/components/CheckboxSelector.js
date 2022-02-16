export default function CheckboxSelector(props) {
  return (
    <div>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}
