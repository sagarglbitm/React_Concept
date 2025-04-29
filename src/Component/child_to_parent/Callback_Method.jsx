
import React,{useState} from 'react'

const Callback_Method = () => {


    const [childData, setChildData] = useState('');

    // Function to handle data received from the child
    const handleDataFromChild = (data) => {
      setChildData(data);
    };
  
    return (
      <div>
        <h1>using callback</h1>
        <h1>Parent Component</h1>
        <p>Data from Child: {childData}</p>
        <Child sendDataToParent={handleDataFromChild} />
      </div>
    );
}

// eslint-disable-next-line react/prop-types
const Child = ({ sendDataToParent }) => {

  
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendDataToParent(inputValue); // Pass data to parent component
      setInputValue(''); // Clear the input field
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some data"
        />
        <button type="submit">Send to Parent</button>
      </form>
    );
  };

export default Callback_Method