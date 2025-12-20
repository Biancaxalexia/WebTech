//Exercitiu
import { useEffect, useState } from 'react';
import User from './User';
import './UserList.css';

const SERVER = 'http://localhost:8080';

function RegularList() {
  const [regulars, setRegulars] = useState([]);

  const getRegulars = async () => {
    const response = await fetch(`${SERVER}/users`);
    const data = await response.json();
    const filtered = data.filter(user => user.type === 'regular');
    setRegulars(filtered);
  };

  useEffect(() => {
    getRegulars();
  }, []);

  return (
    <div className='user-list'>
      {regulars.map(user => <User key={user.id} item={user} />)}
    </div>
  );
}

export default RegularList;
