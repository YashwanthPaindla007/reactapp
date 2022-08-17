import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination =({data,pageHandler})=>{
    let pageNumbers = []
    for(let i = 1;i<Math.ceil(data.length/10);i++){
        pageNumbers.push(i);
    }
    return(
        <div>
            <center>
               {
                pageNumbers.map(page => <div buuton className="btn btn-sm btn-primary" onClick={() =>pageHandler(page)}>{page}</div>)
               }
            </center>
        </div>
    )
}

export default Pagination