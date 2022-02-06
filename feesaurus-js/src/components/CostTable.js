import React from 'react';

export default class CostTable extends React.Component {
    render() {
        return (
            <div className = 'cost-table'>
                <HeaderRow/>
                <AttrCostRow/>
                <AttrCostRow/>
                <AttrCostRow/>
                <AttrCostRow/>
                <AggrCostRow/>
                {/* Misc. Attributes Section */}
                <AttrCostRow/>
                <AttrCostRow/>
                <AttrCostRow/>
                <AttrCostRow/> 
                <AttrCostRow/> 
                <AttrCostRow/> 
                <AttrCostRow/> 
                <AttrCostRow/> 
                <AttrCostRow/>  
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
        <div>
            <input type='radio' id='yes' name={props.name}/> Yes
            <input type='radio' id='no' name={props.name}/> No
        </div>
    );
}

function CheckboxSelector(props) {
    return(
        <div>
            <input type='checkbox' id={props.name} name={props.name}/>
            <label for={props.name}></label>
        </div>
    );
}

class AttrCostRow extends React.Component {
    render() {
        return (
            <h2>Attribute Cost Row</h2>
        );
    }
}

class AggrCostRow extends React.Component {
    render() {
        return (
            <h2>Aggregate Cost Row</h2>
        );
    }
}

function TotalRow(props){
    return (
        <div>
            <h3>Total Pt. Responsibility: {props.totalCost}</h3>
        </div>
    );
}