import React, { cloneElement } from 'react';
import { lensIsMultifocal } from './HelperFunctions';

export default class CostTable extends React.Component {
    constructor(props) {
        super(props);
        this.onLensPresetChange = this.onLensPresetChange.bind(this);
        this.onLensTypeChange = this.onLensTypeChange.bind(this);
        this.onMaterialChange = this.onMaterialChange.bind(this);
        this.onCoatingChange = this.onCoatingChange.bind(this);
        this.onTintChange = this.onTintChange.bind(this);
        this.onPolishChange = this.onPolishChange.bind(this);
        this.onDrillingChange = this.onDrillingChange.bind(this);
        this.onOversizeChange = this.onOversizeChange.bind(this);
        this.onSlabOffChange = this.onSlabOffChange.bind(this);
        this.onBeveledEdge1Change = this.onBeveledEdge1Change.bind(this);
        this.onBeveledEdge2Change = this.onBeveledEdge2Change.bind(this);
        this.onWrapChange = this.onWrapChange.bind(this);
        this.onUVChange = this.onUVChange.bind(this);
        this.onMirrorCoatingChange = this.onMirrorCoatingChange.bind(this);

        this.state = {
            'lensPreset' : 'None',
            'lensType' : 'Single Vision',
            'material' : 'CR-39',
            'coating' : 'None',
            'tint' : 'None',
            'Polish, coat, paint, groove, rimless mount' : false,
            'Drilling: 2 or 4 holes' : false,
            'Oversize (>= 56mm)' : false,
            'Slab Off' : false,
            'Beveled Edges, Facets - One Side' : false,
            'Beveled Edges, Facets - Two Sides' : false,
            'Wrap Frame' : false,
            'UV Coating' : false,
            'Mirror Coating' : false,
            'isMultifocal' : false, 
        }
    }

    onLensPresetChange(e) {
        this.setState({lensPreset : e.target.value})
    }

    onLensTypeChange(e) {
        let newLensType = e.target.value;
        this.setState({lensType : newLensType});
        // Update whether or not this lens is a multifocal lens.
        this.setState({isMultifocal : (this.props.lensDB.get(newLensType).isMultifocal)});
    }

    onMaterialChange(e) {
        this.setState({material : e.target.value});
    }

    onCoatingChange(e) {
        this.setState({coating : e.target.value});
    }

    onTintChange(e) {
        this.setState({tint : e.target.value});
    }

    onPolishChange(e) {
        let currentValue = this.getState('Polish, coat, paint, groove, rimless mount');  
        this.setState({'Polish, coat, paint, groove, rimless mount' : !currentValue});
    }

    onDrillingChange(e) {
        let currentValue = this.getState('Drilling'); 
        this.setState({'Drilling' : !currentValue});    
    }

    onOversizeChange(e) {
        let currentValue = this.getState('Oversize (>= 56mm)');   
        this.setState({'Oversize (>= 56mm)' : !currentValue});
    }

    onSlabOffChange(e) {
        let currentValue = this.getState('Slab Off'); 
        this.setState({'Slab Off' : !currentValue});
    }

    onBeveledEdge1Change(e) {
        let currentValue = this.getState('Beveled Edges, Facets - One Side');
        this.setState({'Beveled Edges, Facets - One Side': !currentValue});
    }

    onBeveledEdge2Change(e) {
        let currentValue = this.getState('Beveled Edges, Facets - Two Sides');
        this.setState({'Beveled Edges, Facets - Two Sides' : !currentValue});
    }

    onWrapChange(e) {
        let currentValue = this.getState('Wrap Frame'); 
        this.setState({'Wrap Frame' : !currentValue});
    }

    onUVChange(e) {
        let currentValue = this.getState('UV Coating');  
        this.setState({'UV Coating' : !currentValue});
    }

    onMirrorCoatingChange(e) {
        let currentValue = this.getState('Mirror Coating');
        this.setState({'Mirror Coating' : !currentValue});
    }

    render() {
        return (
            <div className = 'cost-table'>
                <br/>
                <HeaderRow name='Lens Preset' menuOptions={this.props.menuOptions} 
                           onChange={this.onLensPresetChange} state={[this.state.lensPreset, this.state.isMultifocal]}
                            lensDB={this.props.lensDB}
                           />
                <br/>
                <RadioAttrRow name='Exam?' menuOptions={this.props.menuOptions} />
                <SelectAttrRow name='Lens Type' type='select' menuOptions={this.props.menuOptions}
                             onChange={this.onLensTypeChange} state={[this.state.lensType, this.state.isMultifocal]}
                            lensDB={this.props.lensDB}
                />
                <SelectAttrRow name='Material' menuOptions={this.props.menuOptions}
                             onChange={this.onMaterialChange} state={[this.state.material, this.state.isMultifocal]}
                            lensDB={this.props.lensDB}
                />
                <SelectAttrRow name='Coating' menuOptions={this.props.menuOptions}
                             onChange={this.onCoatingChange} state={[this.state.coating, this.state.isMultifocal]}
                            lensDB={this.props.lensDB}
                />
                <SelectAttrRow name='Tint' menuOptions={this.props.menuOptions}
                             onChange={this.onTintChange} state={[this.state.tint, this.state.isMultifocal]}
                            lensDB={this.props.lensDB}
                />
                <br/>
                <AggrCostRow name='Misc. Treatments'/>
                {/* Misc. Attributes Section */}
                <CheckboxAttrRow name='Polish, coat, paint, groove, rimless mount' 
                                 onChange={this.onPolishChange} state={this.state['Polish, coat, paint, groove, rimless mount']}
                                 lensDB={this.props.lensDB}
                />
                <CheckboxAttrRow name='Drilling: 2 or 4 holes'
                                 onChange={this.onDrillingChange} state={this.state['Drilling: 2 or 4 holes']}
                                 lensDB={this.props.lensDB}
                />
                <CheckboxAttrRow name='Oversize (>= 56mm)'
                                 onChange={this.onOversizeChange} state={this.state['Oversize (>= 56mm)']}
                                 lensDB={this.props.lensDB}
                />
                <CheckboxAttrRow name='Slab Off Prism'
                                 onChange={this.onSlabOffChange} state={this.state['Slab Off']}
                                 lensDB={this.props.lensDB}
                /> 
                <CheckboxAttrRow name='Beveled Edges, Facets - One Side'
                                 onChange={this.onBeveledEdge1Change} state={this.state['Beveled Edges, Facets - One Side']}
                                 lensDB={this.props.lensDB}
                /> 
                <CheckboxAttrRow name='Beveled Edges, Facets - Two Sides'
                                 onChange={this.onBeveledEdge2Change} state={this.state['Beveled Edges, Facets - Two Sides']}
                                 lensDB={this.props.lensDB}
                /> 
                <CheckboxAttrRow name='Wrap Frame'
                                 onChange={this.onWrapChange} state={this.state['Wrap Frame']}
                                 lensDB={this.props.lensDB}
                /> 
                <CheckboxAttrRow name='UV Coating'
                                 onChange={this.onUVChange} state={this.state['UV Coating']}
                                 lensDB={this.props.lensDB}
                /> 
                <CheckboxAttrRow name='Mirror Coating'
                                 onChange-={this.onMirrorCoatingChange} state={this.state['Mirror Coating']}
                                 lensDB={this.props.lensDB}
                />  
                <TotalRow/>        
            </div>
        );
    }
}

/* Temporary styling to prevent headers from breaking onto their own line (better readability during testing). */
const inline = {
    display: 'inline'
}

class HeaderRow extends React.Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <MenuSelector name={this.props.name} menuOptions={this.props.menuOptions} 
                              onChange={this.props.onChange}/>
                <h2>Pt. Responsibility</h2>
            </div>
        );
    }
}

class SelectAttrRow extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <MenuSelector name={this.props.name} menuOptions={this.props.menuOptions}
                              onChange={this.props.onChange}
                />
                <AttrCost state={this.props.state} lensDB={this.props.lensDB}/>
            </div>
        );
    }
}

class MenuSelector extends React.Component {
    render() {
        // console.log('Now entering MenuSelector for row, ' + this.props.name + '.')
        let optionsList = this.props.menuOptions.get(this.props.name).map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        });
        return(    
            <select name={this.props.name} onChange={this.props.onChange}>
                {optionsList}
            </select>
        );
    }
}

class CheckboxAttrRow extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <CheckboxSelector name={this.props.name}/>
            </div>
        );
    }
}

class RadioAttrRow extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        return(
            <div>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <RadioButtonSelector name={this.props.name}/>
            </div>
        );
    }
}

/* Displays the cost of any lens attribute. Requires the name of the attribute to be
   looked up and the lensDB passed through props.*/
function AttrCost(props) {
    let attrName = props.state[0];
    let isMultifocal = props.state[1];
    // debugger;
    // console.log('The attribute cost of, ' + attrName + ' is, ' + props.lensDB.get(attrName).svCost);
    let cost;
    if(isMultifocal) {
        cost = props.lensDB.get(attrName).mfCost;
    } else {
        cost = props.lensDB.get(attrName).svCost;
    }
    return(
        <h4 style={inline}>
            ${cost}
        </h4>
    );
}

function RadioButtonSelector(props) {
    console.log('Now entering RadioButtonSelector for row, ' + props.name + '.')
    return(
        <div style={inline}>
            <input type='radio' id='yes' name={props.name}/> Yes
            <input type='radio' id='no' name={props.name}/> No
        </div>
    );
}

function CheckboxSelector(props) {
    console.log('Now entering CheckboxSelector for row, ' + props.name + '.')
    return(
        <div style={inline}>
            <input type='checkbox' id={props.name} name={props.name}/>
        </div>
    );
}

function AggrCostRow(props) {
    return (
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <h4 style={inline}>$90</h4>
        </div>
    );
}

function TotalRow(props){
    return (
        <div>
            <h3>Total Pt. Responsibility: 0</h3>
        </div>
    );
}