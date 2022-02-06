import React from 'react';

export default class CostTable extends React.Component {
    render() {
        return (
            <div className = 'cost-table'>
                <br/>
                <HeaderRow/>
                <br/>
                <AttrCostRow name='Exam?' type='radio'/>
                <AttrCostRow name='Lens Type' type='select'/>
                <AttrCostRow name='Material' type='select'/>
                <AttrCostRow name='Coating' type='select'/>
                <AttrCostRow name='Tint' type='select'/>
                <br/>
                <AggrCostRow name='Misc. Treatments'/>
                {/* Misc. Attributes Section */}
                <AttrCostRow name='Polish, coat, paint, groove, rimless mount' type='checkbox'/>
                <AttrCostRow name='Drilling: 2 or 4 holes' type='checkbox'/>
                <AttrCostRow name='Oversize (>= 56mm)' type='checkbox'/>
                <AttrCostRow name='Slab Off Prism' type='checkbox'/> 
                <AttrCostRow name='Beveled Edges, Facets - One Side' type='checkbox'/> 
                <AttrCostRow name='Beveled Edges, Facets - Two Sides' type='checkbox'/> 
                <AttrCostRow name='Wrap Frame' type='checkbox'/> 
                <AttrCostRow name='UV Coating' type='checkbox'/> 
                <AttrCostRow name='Mirror Coating' type='checkbox'/>  
                <TotalRow/>        
            </div>
        );
    }
}

class HeaderRow extends React.Component {
    render() {
        return (
            <div>
                <PropertySelector name='Lens Preset' type='select'/>
                <h2>Pt. Responsibility</h2>
            </div>
        );
    }
}

function PropertySelector(props) {
    return (
        <div>
            <label for={props.name}></label>
            <AttrSelector type={props.type} name={props.name}/>
        </div>
    );
}

function AttrSelector(props) {
    if(props.type === 'select') {
        return <MenuSelector name={props.name}/>
    } else if(props.type === 'radio') {
        return <RadioButtonSelector name={props.name}/>
    } else {
        return <CheckboxSelector name={props.name}/>
    }
}

function MenuSelector(props) {
    return(
        <select name={props.name}>
            <option value="Dummy option">Dummy Option</option>
        </select>
    );
}

function RadioButtonSelector(props) {
    return(
        <div style={inline}>
            <input type='radio' id='yes' name={props.name}/> Yes
            <input type='radio' id='no' name={props.name}/> No
        </div>
    );
}

function CheckboxSelector(props) {
    return(
        <div style={inline}>
            <input type='checkbox' id={props.name} name={props.name}/>
        </div>
    );
}

/* Temporary styling to prevent headers from breaking onto their own line (better readability during testing). */
const inline = {
    display: 'inline'
};


function AttrCostRow(props) {
    return (
        <div>
            <label htmlFor={props.name}>{props.name}</label>
            <AttrSelector name={props.name} type={props.type}/>
            <h4 style={inline}>$10</h4>
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