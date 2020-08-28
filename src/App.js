import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Image1 from './images/pug1.jpg';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "venturads",
      caption: "great day to code",
      imageUrl: "https://miro.medium.com/max/11136/0*FI11QQF37uHOsnUZ"
    },
    {
      username: "frank",
      caption: "who loves css",
      imageUrl: "https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
    },
    {
      username: "venturads",
      caption: "great day to code",
      imageUrl: "https://miro.medium.com/max/10944/1*ak9b5IT_n6mi9FE_KSoiHQ.jpeg"
    }
  ]);

  return (
    <div className="App">
      <h1>hello world!</h1>
      <Header />
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}
          />
        ))
      }
    </div>
  );
}

export default App;
