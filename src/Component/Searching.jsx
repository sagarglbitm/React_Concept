
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Searching() {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [name, setName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://651275e9b8c6ce52b395a3a3.mockapi.io/products/table")
        setData(res.data)
      }
      catch (err) {
        setError(err.msg)
      }
    }
    fetchData();
  }, [])

  const handleSearch = () => {
    let value = data.filter((val) => val.productName === name || val.itemPrice == name || val.size == name)
    // const value = data.filter((val) => 
    //   val.productName.toLowerCase().includes(name.toLowerCase()) ||
    //   val.itemPrice.toString() === name ||
    //   val.size.toLowerCase().includes(name.toLowerCase())
    // );
    setData(value)
  }
  return (
    <div className="container">
      <h2 className="title">Product Search</h2>
      <div className="search-container">
        <input 
          type='text' 
          onChange={(e) => setName(e.target.value)} 
          className="input" 
          placeholder="Search by name, price, or size" 
        />
        <button onClick={handleSearch} className="button">Search</button>
      </div>

      {error ? (
        <h1 className="error">{error}</h1>
      ) : (
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
            {data.map((item, index) => (
              <tr key={item.serialNo}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.size}</td>
                <td>{item.itemPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Searching