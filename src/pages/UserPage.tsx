import { useContext, useEffect } from 'react';
import { GithubContext } from '../context/github/GithubContext';
import { useNavigate, useParams } from 'react-router-dom';

const UserPage = () => {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.login) {
      getUser(params.login);
    } else {
      navigate('/notfound');
    }
  }, []);

  return <div>{user.login}</div>;
};

export default UserPage;
