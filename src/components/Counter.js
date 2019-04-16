import React, { Component } from 'react';
import '../scss/Counter.scss';
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div className='counter-wrapper'>
        <p>Your name is: {this.props.myName}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myName: 'BORO'
  }
}

export default connect(mapStateToProps)(Counter);