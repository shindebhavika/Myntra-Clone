import React, { useRef, useState } from 'react';
import './App.css';
import { Users } from './users';

function App() {
  const name = useRef("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = () => {
    const searchTerm = name.current.value.toLowerCase();
    const filtered = Users.filter(user =>
      user.first_name.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(filtered);
  };

  return (
    <center>
      <div className='app'>
        <input type="text" className='search' placeholder='Search....' ref={name} />
        <button onClick={handleSearch}>Search</button>
        <ul className='list'>
          {filteredUsers.length > 0
            ? filteredUsers.map(user => (
                <li className="listItem" key={user.id}>
                  {user.first_name}
                </li>
              ))
            : Users.map(user => (
                <li className="listItem" key={user.id}>
                  {user.first_name}
                </li>
              ))}
        </ul>
      </div>
    </center>
  );
}

export default App;
