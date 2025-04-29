// import React, { useState } from 'react'

// function PostApi() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const userDetails = { name, email };

//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(userDetails),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setSuccess(`User created with ID: ${data.id}`);
//             setError(null); // Clear any previous errors
//         } catch (error) {
//             setError(`Error: ${error.message}`);
//             setSuccess(null); // Clear any previous success messages
//         }
//     };

//     return (
//         <div>
//             <h1>Create User using fetch</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Create User</button>
//             </form>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {success && <p style={{ color: 'green' }}>{success}</p>}
//         </div>
//     );
// }

// export default PostApi

import React, { useState } from 'react'
import axios from 'axios';

function PostApi() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userDetails = { name, email };

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos/', userDetails);
            setSuccess(`User created with ID: ${response.data.id}`);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(`Error: ${error.response ? error.response.data.message : error.message}`);
            setSuccess(null); // Clear any previous success messages
        }
    };

    return (
        <div>
            <h1>Create User using axios</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create User</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
}

export default PostApi

