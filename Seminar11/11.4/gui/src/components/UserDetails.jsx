//Exercitiu
import './UserDetails.css';

function UserDetails({ user }) {
  if (!user) return <div className="user-details">Select a user to see details</div>;

  return (
    <div className="user-details">
      <h3>Details</h3>
      <div><strong>Username:</strong> {user.username}</div>
      <div><strong>Full Name:</strong> {user.fullName}</div>
      <div><strong>Type:</strong> {user.type}</div>
    </div>
  );
}

export default UserDetails;
