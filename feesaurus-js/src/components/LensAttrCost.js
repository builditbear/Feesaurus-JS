/**
 * Display the cost of a given lens attribute. Requires the name of the attribute,
 * knowledge of whether or not the lens represented in parent state is SV or MF,
 * and a map where the appropriate cost can be looked up by name.
 */
export default function LensAttrCost({ name, isMultifocal, lensDB }) {
  let cost = 0;
  if (isMultifocal) {
    let values = lensDB.get(name);
    cost = values.mfCost;
  } else {
    let values = lensDB.get(name);
    cost = values.svCost;
  }
  return <h4>${cost}</h4>;
}
