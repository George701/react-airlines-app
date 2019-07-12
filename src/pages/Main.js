import React, { Component } from 'react';
import { connect } from "react-redux";

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
            </div>
        )
    }
}

export default connect((state) => {return {cred: state.cred}})(Main);
