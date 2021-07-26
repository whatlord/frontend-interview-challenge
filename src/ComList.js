import React, {useState, useEffect} from "react";

export default function ComList({post}) {
    let postId = post.id;
    const [comments, setComments] = useState([])
    
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => response.json())
        .then(setComments)
        .catch((error) => {
          console.log(error)
        });
    }, []);
    console.log(comments)

    const comList = comments.map((comment)=>{
        return <li>{comment.body}</li>
      })
      
      
    return <ul>{comList}</ul>
}