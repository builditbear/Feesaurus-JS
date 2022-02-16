export default function RadioButtonSelector(props) {
  return (
    <div>
      <input type="radio" id="yes" name={props.name} value={true} />
      <label htmlFor="yes">Yes</label>
      <input type="radio" id="no" name={props.name} value={false} />
      <label htmlFor="no">No</label>
    </div>
  );
}
