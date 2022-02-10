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
            'coating' : 'none',
            'tint' : 'none',
            'Polish, coat, paint, groove, rimless mount' : false,
            'Drilling: 2 or 4 holes' : false,
            'Oversize (>= 56mm)' : false,
            'Slab Off' : false,
            'Beveled Edges, Facets - One Side' : false,
            'Beveled Edges, Facets - Two Sides' : false,
            'Wrap Frame' : false,
            'UV Coating' : false,
            'Mirror Coating' : false, 
        }
    }

    onLensPresetChange(e) {
        this.setState({lensPreset : e.target.value})
    }

    onLensTypeChange(e) {
        this.setState({lensType : e.target.value});
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
                <HeaderRow name='Lens Preset' type='select' menuOptions={this.props.menuOptions} 
                           onChange={this.onLensPresetChange} state={this.state.lensPreset}
                            lensDB={this.lensDB}
                           />
                <br/>
                <RadioAttrRow name='Exam?' type='radio' menuOptions={this.props.menuOptions} />
                <SelectAttrRow name='Lens Type' type='select' menuOptions={this.props.menuOptions}
                             onChange={this.onLensTypeChange} state={this.state.lensType}
                            lensDB={this.lensDB}
                />
                <SelectAttrRow name='Material' type='select' menuOptions={this.props.menuOptions}
                             onChange={this.onMaterialChange} state={this.state.material}
                            lensDB={this.lensDB}
                />
                <SelectAttrRow name='Coating' type='select' menuOptions={this.props.menuOptions}
                             onChange={this.onCoatingChange} state={this.state.coating}
                            lensDB={this.lensDB}
                />
                <SelectAttrRow name='Tint' type='select' menuOptions={this.props.menuOptions}
                             onChange={this.onTintChange} state={this.state.tint}
                            lensDB={this.lensDB}
                />
                <br/>
                <AggrCostRow name='Misc. Treatments'/>
                {/* Misc. Attributes Section */}
                <CheckboxAttrRow name='Polish, coat, paint, groove, rimless mount' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onPolishChange} state={this.state['Polish, coat, paint, groove, rimless mount']}
                            lensDB={this.lensDB}
                />
                <CheckboxAttrRow name='Drilling: 2 or 4 holes' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onDrillingChange} state={this.state['Drilling: 2 or 4 holes']}
                            lensDB={this.lensDB}
                />
                <CheckboxAttrRow name='Oversize (>= 56mm)' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onOversizeChange} state={this.state['Oversize (>= 56mm)']}
                            lensDB={this.lensDB}
                />
                <CheckboxAttrRow name='Slab Off Prism' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onSlabOffChange} state={this.state['Slab Off']}
                            lensDB={this.lensDB}
                /> 
                <CheckboxAttrRow name='Beveled Edges, Facets - One Side' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onBeveledEdge1Change} state={this.state['Beveled Edges, Facets - One Side']}
                            lensDB={this.lensDB}
                /> 
                <CheckboxAttrRow name='Beveled Edges, Facets - Two Sides' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onBeveledEdge2Change} state={this.state['Beveled Edges, Facets - Two Sides']}
                            lensDB={this.lensDB}
                /> 
                <CheckboxAttrRow name='Wrap Frame' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onWrapChange} state={this.state['Wrap Frame']}
                            lensDB={this.lensDB}
                /> 
                <CheckboxAttrRow name='UV Coating' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange={this.onUVChange} state={this.state['UV Coating']}
                            lensDB={this.lensDB}
                /> 
                <CheckboxAttrRow name='Mirror Coating' type='checkbox' menuOptions={this.props.menuOptions}
                             onChange-={this.onMirrorCoatingChange} state={this.state['Mirror Coating']}
                            lensDB={this.lensDB}
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

function HeaderRow(props){
    return (
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <MenuSelector name={props.name} menuOptions={props.menuOptions}/>
            <h2>Pt. Responsibility</h2>
        </div>
    );
}

class SelectAttrRow extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <MenuSelector name={this.props.name} menuOptions={this.props.menuOptions}/>
            </div>
        );
    }
}

class MenuSelector extends React.Component {
    render() {
        console.log('Now entering MenuSelector for row, ' + this.props.name + '.')
        let optionsList = this.props.menuOptions.get(this.props.name).map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        });
        return(    
            <select name={this.props.name}>
                {optionsList}
            </select>
        );
    }
}

class CheckboxAttrRow extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
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
   looked up and the appropriate data */
// class AttrCost extends React.Component {
//     render() {
//         if(this.state == 'None') {
//             return <h4>0.00</h4>
//         } else {

//         }
//     }

// }

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