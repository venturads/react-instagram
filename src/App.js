import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Image1 from './images/pug1.jpg';

function App() {
  const [posts, setPosts] = useState([]);
  
  return (
    <div className="App">
      <h1>hello world!</h1>
      <Header />
      <Post username="venturads" caption="Great good on posts!" imageUrl={Image1} />
      <Post username="frank" caption="i love coding" imageUrl="https://miro.medium.com/max/10944/1*ak9b5IT_n6mi9FE_KSoiHQ.jpeg" />
      <Post username="albert" caption="lets get coding" imageUrl="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png" />
    </div>
  );
}

export default App;
