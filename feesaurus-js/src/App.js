import FeeCalculator from './components/FeeCalculator.js';
import './App.css';

function App() {
  /* For populating the UI's select menus for Lens Type, Material, Coating, and Tint. */
  /* The user's choices for misc. treatments are communicated using labelled checkboxes instead,
  /* and so are not listed here. */
  const options = new Map([
    ['Lens Preset', ['None']],
    ['Lens Type', ['Single Vision', 'Digital Single Vision', 'Bifocal', 'Digital Bifocal',
    'Trifocal', 'Standard Progressive', 'Premium Progressive',
    'Digital/Freeform Progressive', 'Computer Lens', 'Blended Multifocals']],
    ['Material', ['CR-39', 'Polycarbonate', 'Mid-Index 1.50 - 1.59/Trivex',
    'Hi-Index 1.60 - 1.69', 'Hi-Index 1.70 & Higher']],
    ['Coating', ['None', 'AR + Scratchcoat Basic', 'AR + Scratchcoat Premium',
    'AR + Blue Light Blocker', 'AR + Anti-Fog Treatment']],
    ['Tint', ['None', 'Solid Tint', 'Gradient Tint', 'Blue Light Blocking Tint', 'Polarized',
    'Photochromic', 'Polarized Photochromic']]
  ])
  /* All fees listed here were copied from Dustin Wilson's NBN 2022 spreadsheet, as I did not have access
  /* to the 2022 NBN fees schedule at the time of this writing. */
  const lensEnhancements = new Map([
    /* Material */
    ['CR-39', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Polycarbonate', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Mid Index 1.50 - 1.59/Trivex', {'svCost' : 46.40, 'mfCost' : 51.70}],
    ['Hi-Index 1.60 - 1.69', {'svCost' : 55.00, 'mfCost' : 65.90}],
    ['Hi-Index 1.70 & Higher', {'svCost' : 75.50, 'mfCost' : 86.34}],
    /* Coatings */
    ['A/R + S/C Basic', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['A/R + S/C Premium', {'svCost' : 27.80, 'mfCost' : 27.80}],
    ['A/R + Blue Light Blocker', {'svCost' : 35.80, 'mfCost' : 35.80}],
    ['A/R + Anti-Fog Treatment', {'svCost' : 40.30, 'mfCost' : 40.30}],
    /* Tints */
    ['Solid Tint', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Gradient Tint', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Blue Light Blocking Tint', {'svCost' : 27.00, 'mfCost' : 27.00}],
    ['Polarized', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Photochromic', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Polarized Photochromic', {'svCost' : 0.00, 'mfCost' : 0.00}],
    /* Misc. Treatments (Listed on Dustin's NBN spreadsheet as 'Special Lens Edge Treatments'. */
    ['Polish, coat, paint, groove, rimless mount', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Drilling: 2 or 4 holes', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Oversize (>= 56mm)', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Slab Off', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Beveled Edges, Facets - One Side', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Beveled Edges, Facets - Two Sides', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Wrap Frame', {'svCost' : 32.00, 'mfCost' : 32.00}],
    ['UV Coating', {'svCost' : 0.00, 'mfCost' : 0.00}],
    ['Mirror Coating', {'svCost' : 50.26, 'mfCost' : 50.26}]
  ])
  const baseAttributes = new Map([
    ['Single Vision', {'isMultifocal' : false, 'cost' : 0.00}],
    ['Digital Single Vision', {'isMultifocal' : false, 'cost': 63.00}],
    ['Bifocal', {'isMultifocal' : true, 'cost' : 0.00}],
    ['Digital Bifocal', {'isMultifocal' : true, 'cost' : 63.00}],
    ['Trifocal', {'isMultifocal' : true, 'cost' : 0.00}],
    ['Standard Progressive', {'isMultifocal' : true, 'cost' : 0.00}],
    ['Premium Progressive', {'isMultifocal' : true, 'cost' : 48.90}],
    ['Digital/Freeform Progressive', {'isMultifocal' : true, 'cost' : 68.36}],
    ['Computer Lens', {'isMultifocal' : true, 'cost' : 46.50}],
    ['Blended Multifocals', {'isMultifocal' : true, 'cost' : 0.00}]
  ])

  const lensAttributeDB = new Map([
    ['Base Attributes', baseAttributes], 
    ['Lens Enhancements', lensEnhancements]
  ])

  return <FeeCalculator name="Feesaurus" options={options} db={lensAttributeDB}/>;
}

export default App;
