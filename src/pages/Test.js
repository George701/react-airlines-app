import React, { Component } from 'react';
// import api from '../apitest.json';
import { convertDate } from '../functions';

class Test extends Component {
    render() {
        return (
            <div>
                {convertDate("2019-07-13T00:00:00")}
            </div>
        )
    }
}

export default Test;
