import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
    render() {
        const { newValue } = this.props;

        return (
            <span>{newValue}</span>
        )
    }
}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(Message);