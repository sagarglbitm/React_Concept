// import React, { useState, useEffect } from 'react';

// const ServerSidePagination = () => {
//     const [data, setData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10; // Number of items per page
  
//     // Fetch all data from the API
//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//         const result = await response.json();
//         setData(result); // Store the entire data set
//       };
  
//       fetchData();
//     }, []);
  
//     // Calculate the current items to display based on the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentData = data.slice(startIndex, endIndex);
  
//     // Total number of pages
//     const totalPages = Math.ceil(data.length / itemsPerPage);
  
//   return (
//     <>
//     <div>ServerSidePagination</div>
//     <ul>
//         {currentData.map((item) => (
//           <li key={item.id}>{item.id}-{item.title}</li>
//         ))}
//       </ul>

//       {/* Pagination Controls */}
//       <div className="pagination">
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentPage(index + 1)}
//             className={currentPage === index + 1 ? "active" : ""}
//           >
//             {index + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </>
    
//   )
// }

// export default ServerSidePagination



import React, { useState, useEffect } from 'react';

const ServerSidePagination = () => {
  const [data,setData]=useState([])

  const [currentPage,setCurrentPage]=useState(1);
  const[rowPerPage,setRowPerPage] =useState(10)

  const lastItemIndex=currentPage*rowPerPage;
  const firstItemIndex=lastItemIndex-rowPerPage;
  
  const currentData=data.slice(firstItemIndex,lastItemIndex)
  const toatalPages=Math.ceil(data.length / rowPerPage)
 

  useEffect(()=>{
    const fetchedData=async()=>{

      
        const response=await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const details=await response.json()
        setData(details)


      
    }
    fetchedData()

  },[])
  console.log(currentData)
  
  
  return (
    
    <>
    <table>
      <thead>
        <tr>
          <th>s.no</th>
          <th>title</th>
          <th>completed</th>
        </tr>

      </thead>
      <tbody>
        {
          currentData.map((item,index)=>(
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
          ))
        }

      </tbody>

      <button onClick={()=>setCurrentPage(currentPage-1)}>prev</button>
      {
        Array.from({length:toatalPages},(_,index)=>(
          <button onClick={()=>setCurrentPage(index+1)}>{index+1}</button>
        ))
      }



      <button onClick={()=>setCurrentPage(currentPage+1)}>next</button>
    </table>

    </>
  )
}

export default ServerSidePagination



