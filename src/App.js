import React, {useState, useEffect} from "react";
import ComList from "./ComList";

function App() {
  const [posts, setPosts] = useState([]);
  const [shown, setShown] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=10")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
      console.log(shown)
  }, []);

  const handleClick = (event) => {
    const id = event.target.parentNode.id
    console.log("oops", id)
    if(shown.includes(Number(id))){

      const index = shown.findIndex((showList) => showList === id)
      console.log("includes")
      const filteredShown = shown.filter(
        (item) => item !== Number(id)
      );
      setShown(filteredShown)
    }else{
      console.log("doesnt include")
      setShown([...shown, Number(id)])
    }
  }

  const postList = posts.map((post) => {
    const title = post.title;
    const body = post.body;
    return (
      <div key={post.id} id={post.id}>
        <h2>{title}</h2>
        <div onClick={handleClick}>
          {body}
        </div>
        {shown.includes(post.id) && <ComList post={post} shown={shown} hidden={shown === post.id}/>}
        
        
      </div>
    )
  })





  return (
    <div className="App">
      <header className="App-header">
        <h1>The Thing</h1>
      </header>
      <main>
        {postList}
      </main>
    </div>
  );
}

export default App;
