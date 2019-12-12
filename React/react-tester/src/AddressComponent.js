import React from 'react';

class Address extends React.Component {
    render() {
        return (
            <div>
            Manchester
            </div>
        );
    }
}

export default class Info extends React.Component {
    render() {
        return (
            <div>
            <Address/>
            <Address/>
            </div>
        );
    }
}