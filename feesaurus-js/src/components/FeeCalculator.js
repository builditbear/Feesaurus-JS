import React from 'react';
import TitleRow from './TitleRow.js';
import CostTable from './CostTable.js';

export default class FeeCalculator extends React.Component {
    render() {
        return (
            <div className='fee-calculator'>
                <TitleRow name={this.props.name}/>
                <CostTable menuOptions={this.props.menuOptions} lensDB={this.props.lensDB}/>
            </div>
        );
    }
}