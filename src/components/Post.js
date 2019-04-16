import React, { Component } from 'react'

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        let URL = 'https://jsonplaceholder.typicode.com/posts';

        fetch(URL)
            .then(response => response.json())
            .then(
                data => this.setState({posts: data})
                );
    }

  render() {

    const postItems = this.state.posts.map(post => (
        <div className='post-item' key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
    ));

    return (
      <div>
        <h1>{postItems}</h1>
      </div>
    )
  }
}

export default Post;