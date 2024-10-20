
import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <div>
      <h3>Lista de Amigos</h3>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;