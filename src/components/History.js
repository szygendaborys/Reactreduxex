import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../scss/App.scss';

class History extends Component {

  render() {
    return (
      <div>
        {
            this.props.history.map(el => (
                    <li className='history' key={el.change}>
                        <p>Change no.{el.change} | Present Value: {el.age}</p>
                        <button className="delete-button" onClick={() => this.props.onDelItem(el.change)}>X</button>
                    </li>
                )
            )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelItem: (id) => dispatch({type:"DEL_ITEM", key:id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);