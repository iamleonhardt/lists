import React, { Component } from "react";

let cardStyles = {
    height: '20px',
    width: '20px'
}
class card extends Component {

    state = { }
    render() { 
        return ( <div className="card" style={cardStyles}> { this.props.listcontent } </div> );
    }
}
 
export default card ;