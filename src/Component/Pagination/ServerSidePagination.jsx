import React, { useState, useEffect } from 'react';

const ServerSidePagination = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page
  
    // Fetch all data from the API
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const result = await response.json();
        setData(result); // Store the entire data set
      };
  
      fetchData();
    }, []);
  
    // Calculate the current items to display based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
  
    // Total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
  return (
    <>
    <div>ServerSidePagination</div>
    <ul>
        {currentData.map((item) => (
          <li key={item.id}>{item.id}-{item.title}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
    
  )
}

export default ServerSidePagination

