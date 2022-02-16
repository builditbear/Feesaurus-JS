import React, { useReducer } from "react";
import "./App.css";
import TitleRow from "./components/TitleRow.js";
import MenuSelector from "./components/MenuSelector.js";
import LensAttrCost from "./components/LensAttrCost.js";
import CheckboxSelector from "./components/CheckboxSelector.js";
import RadioButtonSelector from "./components/RadioButtonSelector.js";

function App() {
  /* For populating the UI's select menus for Lens Type, Material, Coating, and Tint. */
  /* The user's choices for misc. treatments are communicated using labelled checkboxes instead,
  /* and so are not listed here. */
  const menuOptions = new Map([
    ["Lens Preset", ["None"]],
    [
      "Lens Type",
      [
        "Single Vision",
        "Digital Single Vision",
        "Bifocal",
        "Digital Bifocal",
        "Trifocal",
        "Standard Progressive",
        "Premium Progressive",
        "Digital/Freeform Progressive",
        "Computer Lens",
        "Blended Multifocals",
      ],
    ],
    [
      "Material",
      [
        "CR-39",
        "Polycarbonate",
        "Mid-Index 1.50 - 1.59/Trivex",
        "Hi-Index 1.60 - 1.69",
        "Hi-Index 1.70 & Higher",
      ],
    ],
    [
      "Coating",
      [
        "None",
        "A/R + S/C Basic",
        "A/R + S/C Premium",
        "A/R + Blue Light Blocker",
        "A/R + Anti-Fog Treatment",
      ],
    ],
    [
      "Tint",
      [
        "None",
        "Solid Tint",
        "Gradient Tint",
        "Blue Light Blocking Tint",
        "Polarized",
        "Photochromic",
        "Polarized Photochromic",
      ],
    ],
  ]);
  /* All fees listed here were copied from Dustin Wilson's NBN 2022 spreadsheet, as I did not have access
  /* to the 2022 NBN fees schedule at the time of this writing. */
  const lensDB = new Map([
    /* Base Lens Type */
    ["Single Vision", { isMultifocal: false, svCost: 0.0 }],
    ["Digital Single Vision", { isMultifocal: false, svCost: 63.0 }],
    ["Bifocal", { isMultifocal: true, mfCost: 0.0 }],
    ["Digital Bifocal", { isMultifocal: true, mfCost: 63.0 }],
    ["Trifocal", { isMultifocal: true, mfCost: 0.0 }],
    ["Standard Progressive", { isMultifocal: true, mfCost: 0.0 }],
    ["Premium Progressive", { isMultifocal: true, mfCost: 48.9 }],
    ["Digital/Freeform Progressive", { isMultifocal: true, mfCost: 68.36 }],
    ["Computer Lens", { isMultifocal: true, mfCost: 46.5 }],
    ["Blended Multifocals", { isMultifocal: true, mfCost: 0.0 }],
    /* Material */
    ["CR-39", { svCost: 0.0, mfCost: 0.0 }],
    ["Polycarbonate", { svCost: 0.0, mfCost: 0.0 }],
    ["Mid-Index 1.50 - 1.59/Trivex", { svCost: 46.4, mfCost: 51.7 }],
    ["Hi-Index 1.60 - 1.69", { svCost: 55.0, mfCost: 65.9 }],
    ["Hi-Index 1.70 & Higher", { svCost: 75.5, mfCost: 86.34 }],
    /* Coatings */
    ["A/R + S/C Basic", { svCost: 0.0, mfCost: 0.0 }],
    ["A/R + S/C Premium", { svCost: 27.8, mfCost: 27.8 }],
    ["A/R + Blue Light Blocker", { svCost: 35.8, mfCost: 35.8 }],
    ["A/R + Anti-Fog Treatment", { svCost: 40.3, mfCost: 40.3 }],
    /* Tints */
    ["Solid Tint", { svCost: 0.0, mfCost: 0.0 }],
    ["Gradient Tint", { svCost: 0.0, mfCost: 0.0 }],
    ["Blue Light Blocking Tint", { svCost: 27.0, mfCost: 27.0 }],
    ["Polarized", { svCost: 0.0, mfCost: 0.0 }],
    ["Photochromic", { svCost: 0.0, mfCost: 0.0 }],
    ["Polarized Photochromic", { svCost: 0.0, mfCost: 0.0 }],
    /* Misc. Treatments (Listed on Dustin's NBN spreadsheet as 'Special Lens Edge Treatments'. */
    [
      "Polish, coat, paint, groove, rimless mount",
      { svCost: 0.0, mfCost: 0.0 },
    ],
    ["Drilling: 2 or 4 holes", { svCost: 0.0, mfCost: 0.0 }],
    ["Oversize (>= 56mm)", { svCost: 0.0, mfCost: 0.0 }],
    ["Slab Off", { svCost: 0.0, mfCost: 0.0 }],
    ["Beveled Edges, Facets - One Side", { svCost: 0.0, mfCost: 0.0 }],
    ["Beveled Edges, Facets - Two Sides", { svCost: 0.0, mfCost: 0.0 }],
    ["Wrap Frame", { svCost: 32.0, mfCost: 32.0 }],
    ["UV Coating", { svCost: 0.0, mfCost: 0.0 }],
    ["Mirror Coating", { svCost: 50.26, mfCost: 50.26 }],
    /* Generic item for the absence of a lens treatment. */
    ["None", { svCost: 0.0, mfCost: 0.0 }],
  ]);

  return (
    <FeeCalculator name="Feesaurus" menuOptions={menuOptions} lensDB={lensDB} />
  );
}

function FeeCalculator(props) {
  return (
    <div className="fee-calculator">
      <TitleRow name={props.name} />
      <CostTable menuOptions={props.menuOptions} lensDB={props.lensDB} />
    </div>
  );
}

function CostTable(props) {
  function reducer(state, action) {
    switch (action.type) {
      case "Lens Preset":
        return { ...state, "Lens Preset": action.value };
      case "Lens Type":
        return { ...state, "Lens Type": action.value };
      case "Material":
        return { ...state, Material: action.value };
      case "Coating":
        return { ...state, Coating: action.value };
      case "Tint":
        return { ...state, Tint: action.value };
      case "Polish, coat, paint, groove, rimless mount":
        return {
          ...state,
          "Polish, coat, paint, groove, rimless mount":
            !state["Polish, coat, paint, groove, rimless mount"],
        };
      case "Drilling: 2 or 4 holes":
        return {
          ...state,
          "Drilling: 2 or 4 holes": !state["Drilling: 2 or 4 holes"],
        };
      case "Oversize (>= 56mm)":
        return { ...state, "Oversize (>= 56mm)": !state["Oversize (>= 56mm)"] };
      case "Slab Off":
        return { ...state, "Slab Off": !state["Slab Off"] };
      case "Beveled Edges, Facets - One Side":
        return {
          ...state,
          "Beveled Edges, Facets - One Side":
            !state["Beveled Edges, Facets - One Side"],
        };
      case "Beveled Edges, Facets - Two Sides":
        return {
          ...state,
          "Beveled Edges, Facets - Two Sides":
            !state["Beveled Edges, Facets - Two Sides"],
        };
      case "Wrap Frame":
        return { ...state, "Wrap Frame": !state["Wrap Frame"] };
      case "UV Coating":
        return { ...state, "UV Coating": !state["UV Coating"] };
      case "Mirror Coating":
        return { ...state, "Mirror Coating": !state["Mirror Coating"] };
      default:
        return state;
    }
  }

  const initState = {
    /* Selected Attributes */
    "Lens Preset": "None",
    "Lens Type": "Single Vision",
    Material: "CR-39",
    Coating: "None",
    Tint: "None",
    /* Toggled Attributes */
    "Polish, coat, paint, groove, rimless mount": false,
    "Drilling: 2 or 4 holes": false,
    "Oversize (>= 56mm)": false,
    "Slab Off": false,
    "Beveled Edges, Facets - One Side": false,
    "Beveled Edges, Facets - Two Sides": false,
    "Wrap Frame": false,
    "UV Coating": false,
    "Mirror Coating": false,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const baseLensAttrProps = {
    menuOptions: props.menuOptions,
    dispatch: dispatch,
    lensAttributes: state,
    lensDB: props.lensDB,
  };

  const miscAttrProps = {
    dispatch: dispatch,
    lensAttributes: initState,
    lensDB: props.lensDB,
  };

  /* Temporarily putting elements that I have not completed refactoring here for now. - BC on 02/15/22 */
  // <br />
  // <AggrCostRow name="Misc. Treatments" />
  // {/* Misc. Attributes Section */}
  // <MiscLensAttributes {...miscAttrProps} />
  // <TotalRow state={this.state} />
  return (
    <div className="cost-table">
      <br />
      <HeaderRow
        name="Lens Preset"
        menuOptions={props.menuOptions}
        dispatch={dispatch}
      />
      <br />
      <RadioAttrRow name="Exam?" />
      <BaseLensAttributes {...baseLensAttrProps} />
    </div>
  );
}

/* props contains menuOptions, dispatch for handling changes, lensAttributes, and the lensDB. */
function BaseLensAttributes(props) {
  return (
    <div>
      <SelectAttrRow name="Lens Type" {...props} />
      <SelectAttrRow name="Material" {...props} />
      <SelectAttrRow name="Coating" {...props} />
      <SelectAttrRow name="Tint" {...props} />
    </div>
  );
}

function SelectAttrRow({
  name,
  menuOptions,
  dispatch,
  lensAttributes,
  lensDB,
}) {
  /* Retrieve the array of options for this specific attribute to be passed in to the menu selector. */
  let attrOptions = menuOptions.get(name);
  /* Retrieve the value currently assigned to this attribute. */
  let currentAttr = lensAttributes[name];
  let isMultifocal = lensDB.get(lensAttributes["Lens Type"]).isMultifocal;
  console.log("Calling rendering SelectAttrRow for " + name + ".");
  console.log("The attribute's current value is " + currentAttr + ".");
  console.log("Is the current lens a multifocal? : " + isMultifocal);
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <MenuSelector name={name} attrOptions={attrOptions} dispatch={dispatch} />
      <LensAttrCost
        name={currentAttr}
        isMultifocal={isMultifocal}
        lensDB={lensDB}
      />
    </div>
  );
}

function MiscLensAttributes(props) {
  return (
    <div>
      <CheckboxAttrRow
        name="Polish, coat, paint, groove, rimless mount"
        {...props}
      />
      <CheckboxAttrRow name="Drilling: 2 or 4 holes" {...props} />
      <CheckboxAttrRow name="Oversize (>= 56mm)" />
      <CheckboxAttrRow name="Slab Off" {...props} />
      <CheckboxAttrRow name="Beveled Edges, Facets - One Side" {...props} />
      <CheckboxAttrRow name="Beveled Edges, Facets - Two Sides" {...props} />
      <CheckboxAttrRow name="Wrap Frame" {...props} />
      <CheckboxAttrRow name="UV Coating" {...props} />
      <CheckboxAttrRow name="Mirror Coating" {...props} />
    </div>
  );
}

function HeaderRow({ name, menuOptions, dispatch }) {
  let attrOptions = menuOptions.get(name);
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <MenuSelector name={name} attrOptions={attrOptions} dispatch={dispatch} />
      <h2>Pt. Responsibility</h2>
    </div>
  );
}

function CheckboxAttrRow(props) {
  let costDisplay = ((attrIsChecked) => {
    if (attrIsChecked) {
      return (
        <LensAttrCost
          attributeDetails={[this.props.name, this.props.state.value]}
          lensDB={this.props.lensDB}
        />
      );
    } else {
      return <h4>$0</h4>;
    }
  })(this.props.state.value);
  return (
    <div>
      <label htmlFor={this.props.name}>{this.props.name}</label>
      <CheckboxSelector name={this.props.name} onChange={this.props.onChange} />
      {costDisplay}
    </div>
  );
}

function RadioAttrRow(props) {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <RadioButtonSelector name={props.name} />
    </div>
  );
}

// Needs the lensDB, current state, and isMultifocal boolean.
function TotalRow(props) {
  return <h2>Pt Responsibility</h2>;
}

export default App;
