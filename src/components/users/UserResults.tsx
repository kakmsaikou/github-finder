import { useContext, useEffect } from 'react';
import UserItem from './UserItem';
import { GithubContext } from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';

const UserResults = () => {
  const { users, loading, searchUsers: fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    // fetchUsers();
  }, []);

  return loading ? (
    <Spinner/>
  ) : (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
        // <h3 key={user.id}>{user.login}</h3>
      ))}
    </div>
  );
};

export default UserResults;
