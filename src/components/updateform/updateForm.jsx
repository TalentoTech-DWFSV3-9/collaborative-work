// src/components/UpdateForm.jsx
import { useState } from 'react';

const UpdateForm = ({ updateUser }) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newEmail) {
      updateUser({ name: newName, email: newEmail });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Actualizar Información</h3>
      <input
        type="text"
        placeholder="Nuevo nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Nuevo correo"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateForm;