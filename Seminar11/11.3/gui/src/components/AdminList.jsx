//Exercitiu
import { useEffect, useState } from 'react';
import User from './User';
import './UserList.css';

const SERVER = 'http://localhost:8080';

function AdminList() {
  const [admins, setAdmins] = useState([]);

  const getAdmins = async () => {
    const response = await fetch(`${SERVER}/users`);
    const data = await response.json();
    const filtered = data.filter(user => user.type === 'admin');
    setAdmins(filtered);
  };

  useEffect(() => {
    getAdmins();
  }, []);

  return (
    <div className='user-list'>
      {admins.map(user => <User key={user.id} item={user} />)}
    </div>
  );
}

export default AdminList;
