import React ,{ useState, createContext,useContext }from 'react'


// Create a Context
export const DataContext = createContext();
const ContextAPI_Method = () => {
    const [data, setData] = useState('');

    return (
      <DataContext.Provider value={{ data, setData }}>
        <div>
            <h1>using context api</h1>
          <h1>Parent Component</h1>
          <p>Data from Child: {data}</p>
          <Child />
        </div>
      </DataContext.Provider>
    );
  };


  const Child = () => {
    const { setData } = useContext(DataContext); // Access setData from context
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setData(inputValue); // Update the context (affects the parent)
      setInputValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter data for parent"
        />
        <button type="submit">Send to Parent</button>
      </form>
    );}

export default ContextAPI_Method;