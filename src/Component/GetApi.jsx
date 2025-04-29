// import React, { useEffect, useState } from 'react'

// function GetApi() {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 setError(`Error: ${error.message}`);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div>
//             <h1>User Details</h1>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <ul>
//                 {users.map(user => (
//                     <li key={user.userId}>{user.id}-{user.title} </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default GetApi


import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GetApi() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
                setUsers(response.data);
            } catch (error) {
                setError(`Error: ${error.response ? error.response.data.message : error.message}`);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User Details</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user.userId}>{user.id}-{user.title} </li>
                ))}
            </ul>
        </div>
    );
}

export default GetApi

