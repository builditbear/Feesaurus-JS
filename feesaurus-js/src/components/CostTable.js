import React from 'react';

export default class CostTable extends React.Component {
    render() {
        return (
            <div className = 'cost-table'>
                <br/>
                <HeaderRow name='Lens Preset' type='select' options={this.props.options}/>
                <br/>
                <AttrCostRow name='Exam?' type='radio' options={this.props.options} />
                <AttrCostRow name='Lens Type' type='select' options={this.props.options}/>
                <AttrCostRow name='Material' type='select' options={this.props.options}/>
                <AttrCostRow name='Coating' type='select' options={this.props.options}/>
                <AttrCostRow name='Tint' type='select' options={this.props.options}/>
                <br/>
                <AggrCostRow name='Misc. Treatments'/>
                {/* Misc. Attributes Section */}
                <AttrCostRow name='Polish, coat, paint, groove, rimless mount' type='checkbox' options={this.props.options}/>
                <AttrCostRow name='Drilling: 2 or 4 holes' type='checkbox' options={this.props.options}/>
                <AttrCostRow name='Oversize (>= 56mm)' type='checkbox' options={this.props.options}/>
                <AttrCostRow name='Slab Off Prism' type='checkbox' options={this.props.options}/> 
                <AttrCostRow name='Beveled Edges, Facets - One Side' type='checkbox' options={this.props.options}/> 
                <AttrCostRow name='Beveled Edges, Facets - Two Sides' type='checkbox' options={this.props.options}/> 
                <AttrCostRow name='Wrap Frame' type='checkbox' options={this.props.options}/> 
                <AttrCostRow name='UV Coating' type='checkbox' options={this.props.options}/> 
                <AttrCostRow name='Mirror Coating' type='checkbox' options={this.props.options}/>  
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

function AttrCostRow(props) {
    return (
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <AttrSelector name={props.name} type={props.type} options={props.options}/>
            <h4 style={inline}>$10</h4>
        </div>
    );
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

function MenuSelector(props) {
    console.log('Now entering MenuSelector for row, ' + props.name + '.')
    let optionsList = props.options.get(props.name).map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    });
    return(    
        <select name={props.name}>
            {optionsList}
        </select>
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