import { useContext, useEffect, useState } from 'react';
import UserItem from './UserItem';
import { GithubContext } from '../../context/github/GithubContext';

const UserResults = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
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
