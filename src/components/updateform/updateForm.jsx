// src/components/UpdateForm.jsx
import { useState } from "react";
import propTypes from "prop-types";

const UpdateForm = ({ updateUser }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newEmail) {
      updateUser({ name: newName, email: newEmail });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Actualizar Información de Usuario</h3>
      <input type="text" placeholder="Nuevo nombre" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <input type="email" placeholder="Nuevo correo" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
      <button type="submit">Actualizar</button>
    </form>
  );
};

UpdateForm.propTypes = {
  updateUser: propTypes.func.isRequired,
};

export default UpdateForm;
