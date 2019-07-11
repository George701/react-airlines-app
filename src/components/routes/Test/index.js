import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Test extends Component {
    state = {
        redirect: false
    }

    render() {
        const { auth } = this.props;
        console.log(this.props)
        if(auth){
            if(auth.Token !== "" && (auth.Token).length !== 0){
                return (
                    <div>
                        Protected
                    </div>
                )
            }else{
                return <Redirect to="/login"/>
            }
        }else{
            return <div>Loading...</div>
        }
        
    }
}

export default connect((state) => {return {auth: state.auth}})(Test);
