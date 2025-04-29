

import React, { useState } from 'react';

const Update = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');


  const handleUpdateAxios= async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.put('/api/users/profile/update',{ name, bio },{ withCredentials: true } )
        
        // Important for sending cookies);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Update error (axios):', error);
      alert(error.response?.data?.msg || 'Update failed');
    }
  };

  const handleUpdateFetch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/profile/update', {
        method: 'PUT', // Use PUT for update operation
        credentials: 'include', // Important if using cookies
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, bio }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert(data.msg || 'Update failed');
      }
    } catch (error) {
      console.error('Update error (fetch):', error);
    }
  };

  return (
    <form onSubmit={handleUpdateFetch}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      />
      <button type="submit">Update Profile (Fetch)</button>
    </form>
  );
};

export default Update;
