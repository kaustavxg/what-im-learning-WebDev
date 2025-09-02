import kaustavPic from './assets/Image_Editor.png'
import mohiniPic from './assets/mohini.jpg'

import { PostComponent } from './Post'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);

  const postComponent  = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "John Deph",
      subtitle: "5000",
      time: "52",
      image: mohiniPic,
      description: "i am john deph, the ceo of deph technologies"
    }])
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>

    
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postComponent}
        </div>
      </div>
    </div>
  )
}

export default App


let numbers = [1, 2, 3];
let double = numbers.map(number => number * 2);

console.log(double);
