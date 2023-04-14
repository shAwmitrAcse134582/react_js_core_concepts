import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <Comments></Comments>
         <LoadPosts></LoadPosts>
        <District name="Barishal" speciality="praccer vanis"></District>
        <District name="Noakhali" speciality="Batpar"></District>
        <District name="Brammonbaria" speciality="warrior"></District>
    </div>
  );
}

function Comments(){
  const[comments,setComments]=useState([]);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
   .then(res=>res.json())
   .then(data=>setComments(data));

  },[])
  return(
<div>
  <h1>It is new comments page</h1>
  <h2>comments length:{comments.length}</h2>
  {
    comments.map(comment=><Comment postId={comment.postId} email={comment.email} name={comment.name}></Comment>)
  }
</div>

  )
}

function Comment(props){
  console.log(props);
  return(
    <div className='comment'>
      <h2>postId:{props.postId}</h2>
      <h3>Email:{props.email}</h3>
      <p>name:{props.name}</p>
    </div>
  )
}



  function LoadPosts(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>setPosts(data))
    },[])
     return(
     <div>
        <h1>Posts:{posts.length}</h1>
       {
        posts.map(post=><Post title={post.title} body={post.body}></Post>)
       }
     </div>

     )
  }
  const postStyle={
    backgroundColor:'green',
    margin:'20px',
    padding:'5px',
    border:'1px solid black'
  }

  function Post(props){
    console.log(props)
    return(
      <div style={postStyle}>
        <h2>title:{props.title}</h2>
        <p>body:{props.body}</p>
      </div>
    )
  }


const districtStyle={
  backgroundColor:'gray',
  margin:'20px',
  borderRadius:'30px',
  padding:'20px'
}
function District(props){
  const [power,setPower]=useState(1);
  const boostpower=()=>{
    const newPower=power*2;
    setPower(newPower);
  }
  return(
<div style={districtStyle}>
  <h2>Name:{props.name} </h2>
  <p>Speciality:{props.speciality} </p>
  <h4>Power:{power}</h4>
  <button onClick={boostpower}>Boost the power</button>
</div>

  )
}

export default App;
