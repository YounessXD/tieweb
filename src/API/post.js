import React from 'react'

export default class post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        post: []
      };
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/post")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              post: result  
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, post } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {post.map(item => (
              <li key={item.id}>
                <b>{item.name}</b> : {item.email}
              </li>
            ))}
          </ul>
        );
      }
    }
  }