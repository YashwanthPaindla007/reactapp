// import React,{useState,useEffect}from 'react';
// // import  ReactDOM from 'react-dom';
// import axios from 'axios';

// import Pagination from './Pagination';
 
// const App=()=>{
//   const[data,setData] = useState([]);
//   const[perpage,setPerpage] = useState([]);
//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts').then(
//       res => {setData(res.data);setPerpage(res.data.slice(0,10));}
//     )
//   },[])
//   const pageHandler =(pageNumber) => {
//     setPerpage(data.slice((pageNumber*10)-10,pageNumber*10));
//   }
//   return(
//     <div className="App">
//       {data.length>=1?
//         <div>
//           {perpage.map(post => <div className="post">{post.title}</div>)}
//             <Pagination data={data} pageHandler={pageHandler}/>
//         </div>
//        :
//        <p>Not Loaded</p> 
//     }
//     </div>
//   )
// }
// export default App


import Posts from './components/posts';


function App(){
  return(
    <div>
      <Posts/>
    </div>
  );
}

export default App;