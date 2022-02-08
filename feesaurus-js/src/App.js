import FeeCalculator from './components/FeeCalculator.js';
import './App.css';

function App() {
  const optionsMap = new Map()
  optionsMap.set('Lens Preset', ['None'])
  optionsMap.set('Lens Type', ['Single Vision', 'Digital Single Vision', 'Bifocal', 'Digital Bifocal',
  'Trifocal', 'Standard Progressive', 'Premium Progressive',
  'Digital/Freeform Progressive', 'Computer Lens', 'Blended Multifocals'])
  optionsMap.set('Material', ['CR-39', 'Polycarbonate', 'Mid-Index 1.50 - 1.59/Trivex',
  'Hi-Index 1.60 - 1.69', 'Hi-Index 1.70 & Higher'])
  optionsMap.set('Coating', ['AR + Scratchcoat Basic', 'AR + Scratchcoat Premium',
  'AR + Blue Light Blocker', 'AR + Anti-Fog Treatment'])
  optionsMap.set('Tint', ['Solid Tint', 'Gradient Tint', 'Blue Light Blocking Tint', 'Polarized',
  'Photochromic', 'Polarized Photochromic'])

  return <FeeCalculator name="Feesaurus" options={optionsMap}/>;
}

export default App;
