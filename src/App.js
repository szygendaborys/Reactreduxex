import React, { Component } from 'react';
import './scss/App.scss';
import { connect } from 'react-redux';

import History from './components/History';

class App extends Component {

  render() {
    return (
      <div className="App">
        Simple redux App
        <div>
          Age: <span>{this.props.age}</span> </div>
        <div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age DOWN</button>
        </div>
        <hr/>

        <div>
          <h2>History of changes:</h2>
          <br/>
          <History />
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age:state.age,
  }
}

const mapDispatchToProps = (dispatch) => {  // dispatch actions to all props
  return {
    onAgeUp: () => dispatch({
      type:'AGE_UP',
      value:1
    }),
    onAgeDown: () => dispatch({
      type:'AGE_DOWN',
      value:1
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
