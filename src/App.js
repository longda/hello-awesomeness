// import React from 'react';
// import ReactDOM from 'react-dom';
// import axios from 'axios';
//
// class FetchDemo extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       posts: []
//     };
//   }
//
//   componentDidMount() {
//     axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
//       .then(res => {
//         const posts = res.data.data.children.map(obj => obj.data);
//         console.log('posts: ', posts);
//         this.setState({ posts });
//       });
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{`/r/${this.props.subreddit}`}</h1>
//         <ul>
//           {this.state.posts.map(post =>
//             <li key={post.id}><a href={post.url} title={post.selftext}>{post.title}</a></li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <FetchDemo subreddit="reactjs"/>,
//   document.getElementById('root')
// );
//
// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
