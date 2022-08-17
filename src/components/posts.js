import React,{useEffect,useState} from "react";
import axios from 'axios';
import _ from "lodash";
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { style } from "@mui/system";

const pageSize =10;







const Posts =()=>{
    const [posts,setposts] = useState();
    const [paginatedPosts,setpaginatedPosts] = useState();
    const [currentPaage,setcurrentPage] = useState(1);
    const[order,setorder] =useState("ASC");
    const[data,setdata] =useState();

    const sortingASC = (col) => {
        if(order === "ASC") {
            const sorted = [... paginatedPosts].sort((a,b) =>
            a[col].toLowerCase() > b[col].toLowerCase()? 1: -1
            );
             setpaginatedPosts(sorted);
             setorder("DSC");
        }
        
        
    }
        
    const sortingDSC = (col) => {
        if(order === "DSC") {
            const sorted = [...paginatedPosts].sort((a,b) =>
            a[col].toLowerCase() < b[col].toLowerCase()? 1: -1
            );
             setpaginatedPosts(sorted);
             setorder("ASC");
        }

    }

    const handleClick = () =>{
        sortingASC("title");
      

        
    }
    const handleClick2 = () =>{
        sortingDSC("title");

    }

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) =>{
        console.log(res.data);
        setposts(res.data);
        setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
      });
    },[]);

    const pageCount = posts? Math.ceil(posts.length/pageSize) :0;
    if(pageCount ===1) return null;
    const pages =_.range(1,pageCount+1)

    const pagination=(pageNo)=>{
        setcurrentPage(pageNo);
        const startIndex = (pageNo -1)*pageSize;
        const paginatedPost  = _(posts).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPost)
    }
    return <div>
       
        {
        ! paginatedPosts? ("No Data Found"):(
            <table className='table table-bordered'>
                <thead>
                    <tr>
                      <th>User ID</th>
                      <th>ID</th>
                      <div style={{
                        display : 'flex',
                        // flexDirection : "column",
                        // height:35,
                        // width:35,
                        
                      }}>
                        <th >Title</th>
                        <div style={{
                        display : 'flex',
                        flexDirection : "column",
                        height:15,
                        width:15,
                        
                      }}>
                        {/* <img src="../images/up.png" alt="" onClick={()=>sortingASC("title") */}
                       <img src="../images/up.png" alt="" onClick={handleClick
                        }/>
                        {/* <img src="../images/down.png" alt="" onClick={()=>sortingDSC("title")}/> */}
                        <img src="../images/down.png" alt="" onClick={handleClick2}/>
                      </div></div>
                        
                        
                     
                        {/* <img src="../images/up.png" alt="" onClick={()=>sortingASC("title")}/>
                        <img src="../images/down.png" alt="" onClick={()=>sortingDSC("title")}/> </div> */}
                        
                        {/* <button onClick={()=>sortingASC("title")}><ArrowDropUpIcon/></button> 
                        
                        <button onClick={()=>sortingDSC("title")} ><ArrowDropDownIcon/></button></div>
                         */}
                      
                 
                    </tr>
                
                </thead>
                <tbody>
                    {
                        paginatedPosts.map((post,index)=>(
                            <tr key={index}>
                               <td>{post.userId}</td>
                               <td>{post.id}</td>
                               <td>{post.title}</td>
                               

                               
                    
                
                            </tr>
                        ))
                    }
                    

                    
                </tbody>
            </table>
        )}
        
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {
                pages.map((page) => (
                    <li className={
                        page === currentPaage ? "page-item active" : "page-item"
                    }>
                        <p className="page-link" 
                        onClick={() => pagination(page)}
                        >{page}</p>
                        </li>
                ))
              }
            </ul>
        </nav>
    </div>;
                
}











export default Posts;