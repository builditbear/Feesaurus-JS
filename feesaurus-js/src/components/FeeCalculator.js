import React from 'react';
import TitleRow from './TitleRow.js';

export default class FeeCalculator extends React.Component {
    render() {
        return (
            <div className='fee-calculator'>
                <TitleRow name={this.props.name}/>
            </div>
        );
    }
}