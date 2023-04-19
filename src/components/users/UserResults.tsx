import { useEffect, useState } from 'react';

interface User {
  login: string;
  id: number;
}

const UserResults = () => {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_GITHUB_URL}/users`,
      {
        // headers: {
        //   Authorization: `token ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
        // },
      }
    );

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return loading ? <h3>Loading...</h3>: (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map(user => (
        <h3 key={user.id}>{user.login}</h3>
      ))}
    </div>
  );
};

export default UserResults;
