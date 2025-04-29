import axios from "axios";
import React, { useEffect, useState } from "react";

function Searching() {
  const [data, setData] = useState([]); // Stores original data
  const [filteredData, setFilteredData] = useState([]); // Stores filtered data
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://651275e9b8c6ce52b395a3a3.mockapi.io/products/table"
        );
        setData(res.data);
        setFilteredData(res.data); // Set filteredData initially
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setFilteredData(data); // Reset to original data if search is empty
      return;
    }

    const filtered = data.filter((item) =>
      item.productName.toLowerCase().includes(value) ||
      item.itemPrice.toString().includes(value) ||
      item.size.toLowerCase().includes(value)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <h2 className="title">Product Search</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="input"
          placeholder="Search by name, price, or size"
        />
      </div>

      {error ? (
        <h1 className="error">{error}</h1>
      ) : filteredData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Size</th>
              <th>Item Price</th>
            </tr>
          </thead>
          <tbody>
            
            {filteredData.map((item, index) => (
              <tr key={item.serialNo || index}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.size}</td>
                <td>{item.itemPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="no-results">No products found</h3>
      )}
    </div>
  );
}

export default Searching;
