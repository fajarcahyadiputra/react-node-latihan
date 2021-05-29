import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './app.css';
import Home from './Home/Home';
import CreatePost from './post/CreatePost';
import Post from './post/Post';

function App() {

  return (
    <Router>
      <div className="navbar">
      <div className="container">
        <Link className="nav" to="/home">Home</Link>
        <Link className="nav" to="/create-post">Create post</Link>
      </div>
      </div>
        <div className="container">
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/create-post" exact component={CreatePost}></Route>
          <Route path="/post/:id" exact component={Post}></Route>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
