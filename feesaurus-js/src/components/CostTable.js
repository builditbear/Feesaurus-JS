import React from 'react';

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
        this.onSlabOffChange = this. onSlabOffChange.bind(this);
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
            'Beveled Edges, Facets - Two Sides' : false,
            'Wrap Frame' : false,
            'UV Coating' : false,
            'Mirror Coating' : false
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
                <HeaderRow name='Lens Preset' type='select' options={this.props.options} 
                           onChange={this.onLensPresetChange}/>
                <br/>
                <AttrCostRow name='Exam?' type='radio' options={this.props.options} />
                <AttrCostRow name='Lens Type' type='select' options={this.props.options}
                             onChange={this.onLensTypeChange}
                />
                <AttrCostRow name='Material' type='select' options={this.props.options}
                             onChange={this.onMaterialChange}
                />
                <AttrCostRow name='Coating' type='select' options={this.props.options}
                             onChange={this.onCoatingChange}
                />
                <AttrCostRow name='Tint' type='select' options={this.props.options}
                             onChange={this.onTintChange}
                />
                <br/>
                <AggrCostRow name='Misc. Treatments'/>
                {/* Misc. Attributes Section */}
                <AttrCostRow name='Polish, coat, paint, groove, rimless mount' type='checkbox' options={this.props.options}
                             onChange={this.onPolishChange}
                />
                <AttrCostRow name='Drilling: 2 or 4 holes' type='checkbox' options={this.props.options}
                             onChange={this.onDrillingChange}
                />
                <AttrCostRow name='Oversize (>= 56mm)' type='checkbox' options={this.props.options}
                             onChange={this.onOversizeChange}
                />
                <AttrCostRow name='Slab Off Prism' type='checkbox' options={this.props.options}
                             onChange={this.onSlabOffChange}
                /> 
                <AttrCostRow name='Beveled Edges, Facets - One Side' type='checkbox' options={this.props.options}
                             onChange={this.onBeveledEdge1Change}
                /> 
                <AttrCostRow name='Beveled Edges, Facets - Two Sides' type='checkbox' options={this.props.options}
                             onChange={this.onBeveledEdge2Change}
                /> 
                <AttrCostRow name='Wrap Frame' type='checkbox' options={this.props.options}
                             onChange={this.onWrapChange}
                /> 
                <AttrCostRow name='UV Coating' type='checkbox' options={this.props.options}
                             onChange={this.onUVChange}
                /> 
                <AttrCostRow name='Mirror Coating' type='checkbox' options={this.props.options}
                             onChange-={this.onMirrorCoatingChange}
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
            <PropertySelector name={props.name} type={props.type} options={props.options}/>
            <h2>Pt. Responsibility</h2>
        </div>
    );
}

function PropertySelector(props) {
    return (
        <div>
            <label htmlFor={props.name}>Lens Preset</label>
            <AttrSelector type={props.type} name={props.name} options={props.options}/>
        </div>
    );
}

class AttrCostRow extends React.Component {
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
                <AttrSelector name={this.props.name} type={this.props.type} options={this.props.options}/>
                <h4 style={inline}>$10</h4>
            </div>
        );
    }
}

function AttrSelector(props) {
    console.log('Now entering AttrSelector for row, ' + props.name + '.')
    if(props.type === 'select') {
        return <MenuSelector name={props.name} options={props.options}/>
    } else if(props.type === 'radio') {
        return <RadioButtonSelector name={props.name}/>
    } else {
        return <CheckboxSelector name={props.name}/>
    }
}

class MenuSelector extends React.Component {
    render() {
        console.log('Now entering MenuSelector for row, ' + this.props.name + '.')
        let optionsList = this.props.options.get(this.props.name).map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        });
        return(    
            <select name={this.props.name}>
                {optionsList}
            </select>
        );
    }
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