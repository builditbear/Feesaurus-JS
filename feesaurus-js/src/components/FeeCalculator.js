import React from 'react';
import TitleRow from './TitleRow.js';
import CostTable from './CostTable.js';

export default class FeeCalculator extends React.Component {
    render() {
        // let optionsList = this.props.options.get('Lens Type')
        return (
            <div className='fee-calculator'>
                <TitleRow name={this.props.name}/>
                <CostTable options={this.props.options}/>
            </div>
        );
    }
}