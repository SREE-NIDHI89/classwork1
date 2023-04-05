import React from "react";
import axios from "axios";



const baseURL = "https://jsonplaceholder.typicode.com/comments";

export default function AXIOS() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);

  if (!post) return null;

  function handleItems(item) {
    return (
      <li key={item.id}>
      {item.name} - {item.email}
      </li>
       

    );
  }

  return (
    <div>
   
    {post.map(handleItems)}
 

    </div>
  );
}