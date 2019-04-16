import React, { Component } from 'react'
import '../scss/App.scss'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: ''
        }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
  
    render() {
    return (
      <div>
        <h1>Add a new post!</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label> <br/>
            <input type="text" name="title" placeholder="Title" onChange={this.onChange} value={this.state.title} ></input>
          </div> <br/>
          <div>
            <label>Body:</label> <br/>
            <textarea placeholder="Enter text here" name="body" value={this.state.body} onChange={this.onChange}></textarea>
          </div> <br/>
          <button type="submit">Post it!</button>
        </form>
      </div>
    )
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => console.log(data));

  }
}


export default Postform;
