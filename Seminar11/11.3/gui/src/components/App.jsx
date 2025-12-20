//Exemplu + Exercitiu
import AdminList from './AdminList';
import RegularList from './RegularList';

function App() {
  return (
    <div>
      <h1>All Users</h1>

      <h2>Admins</h2>
      <AdminList />

      <h2>Regular Users</h2>
      <RegularList />
    </div>
  );
}

export default App;
