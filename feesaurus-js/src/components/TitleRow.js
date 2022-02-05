import React from 'react';

export default class TitleRow extends React.Component {
    render() {
        return(
            <div className='title-row'>
                <Title name={this.props.name}/>
                <AboutButton name={this.props.name}/>
            </div>
        );
    }
}

function Title(props) {
    return <h1>{props.name}</h1>;
}

function AboutButton(props) {
    return <button>About {props.name}</button>;
}

