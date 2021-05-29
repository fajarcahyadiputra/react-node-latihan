import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
function Home(props) {

    const [posts, setListPost] = useState([]);
    const history = useHistory();
  useEffect(()=>{
    axios.get('http://localhost:5000/post').then((response)=>{
      setListPost(response.data);
    })
  },[])

    return (
        <div>
        {
            posts.map((post, index)=>{
                return (
              <div key={index} className="box-post" onClick={()=> history.push(`/post/${post.id}`)}>
                    <div className="title">{post.title}</div>
                    <div className="body">{post.postText}</div>
                    <div className="username">{post.username}</div>
            </div>
         )
       })
     }
        </div>
    );
}

export default Home;