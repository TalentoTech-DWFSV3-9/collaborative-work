### **Proyecto: Panel de Información de Usuario**

#### **Descripción del proyecto**
El objetivo es crear una página de usuarios con diferentes componentes que muestren y gestionen información básica de un usuario, por ejemplo:
1. **Tarjeta de perfil** (Avatar, nombre, correo).
2. **Lista de amigos**.
3. **Formulario para actualizar la información**.
4. **Historial de actividades**.
5. **Indicadores de progreso (por ejemplo, completitud de perfil o progreso de tareas)**.

### **Estructura del proyecto**
Cada componente estará separado, y cada miembro del equipo será responsable de uno. Los componentes pueden interactuar entre ellos, pero cada uno tendrá su propia lógica interna.

#### **1. Estructura básica del proyecto**

Usaremos **Vite** y **React**, y la estructura básica sería algo como esto:

```bash
/user-dashboard
├── /src
│   ├── /components
│   │   ├── ProfileCard.jsx  # Tarjeta de perfil
│   │   ├── FriendsList.jsx  # Lista de amigos
│   │   ├── UpdateForm.jsx   # Formulario de actualización
│   │   ├── ActivityLog.jsx  # Historial de actividades
│   │   └── ProgressBar.jsx  # Barra de progreso
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

### **Componentes sugeridos**

Cada componente tendrá una funcionalidad sencilla, pero con su propia lógica interna. Aquí te doy una descripción básica de cada uno:

#### **1. ProfileCard.jsx (Tarjeta de Perfil)**
Este componente mostrará la información del perfil del usuario, como su foto, nombre, y correo.

```javascript
// src/components/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt="avatar" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfileCard;
```

#### **2. FriendsList.jsx (Lista de Amigos)**
Este componente mostrará una lista de amigos del usuario.

```javascript
// src/components/FriendsList.jsx
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
```

#### **3. UpdateForm.jsx (Formulario de Actualización)**
Este componente será un pequeño formulario para actualizar la información del perfil del usuario.

```javascript
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
```

#### **4. ActivityLog.jsx (Historial de Actividades)**
Este componente mostrará un historial de las actividades recientes del usuario.

```javascript
// src/components/ActivityLog.jsx
import React from 'react';

const ActivityLog = ({ activities }) => {
  return (
    <div>
      <h3>Historial de Actividades</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
```

#### **5. ProgressBar.jsx (Barra de Progreso)**
Este componente mostrará una barra de progreso que indica el porcentaje de completitud del perfil.

```javascript
// src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ completion }) => {
  return (
    <div>
      <h3>Progreso del Perfil</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${completion}%`, backgroundColor: 'green' }}
        ></div>
      </div>
      <p>{completion}% Completado</p>
    </div>
  );
};

export default ProgressBar;
```

### **App.jsx: Integra todos los componentes**
El archivo `App.jsx` integrará todos los componentes para que trabajen juntos. Cada componente recibirá la información necesaria a través de props.

```javascript
// src/App.jsx
import { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import FriendsList from './components/FriendsList';
import UpdateForm from './components/UpdateForm';
import ActivityLog from './components/ActivityLog';
import ProgressBar from './components/ProgressBar';

function App() {
  const [user, setUser] = useState({
    name: 'Andrés Parra',
    email: 'andres@example.com',
    avatar: 'https://via.placeholder.com/150',
  });

  const [friends, setFriends] = useState(['Juan', 'Carlos', 'Sofía']);
  const [activities, setActivities] = useState([
    'Inició sesión',
    'Actualizó el perfil',
    'Agregó un amigo',
  ]);
  const [completion, setCompletion] = useState(70);

  const updateUser = (newData) => {
    setUser({ ...user, ...newData });
  };

  return (
    <div>
      <h1>Panel de Usuario</h1>
      <ProfileCard user={user} />
      <FriendsList friends={friends} />
      <UpdateForm updateUser={updateUser} />
      <ActivityLog activities={activities} />
      <ProgressBar completion={completion} />
    </div>
  );
}

export default App;
```

### **Tareas de cada miembro del equipo**
- **Miembro 1**: Crear la **Tarjeta de Perfil**.
- **Miembro 2**: Crear la **Lista de Amigos**.
- **Miembro 3**: Crear el **Formulario de Actualización**.
- **Miembro 4**: Crear el **Historial de Actividades**.
- **Miembro 5**: Crear la **Barra de Progreso**.

### **Colaboración y revisión en GitHub**
- Cada uno trabaja en una rama (`feature/profile-card`, `feature/friends-list`, etc.).
- Al terminar su componente, hacen un **pull request** hacia la rama principal.
- Se revisan los cambios, se resuelven conflictos si es necesario, y se integra todo al proyecto principal.

