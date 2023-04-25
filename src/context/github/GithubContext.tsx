import { createContext, useReducer } from 'react';
import { githubReducer, GithubActionType } from './GithubReducer';
import { useNavigate } from 'react-router-dom';

interface GithubContextType {
  users: User[];
  user: User;
  loading: boolean;
  searchUsers: (text: string) => void;
  getUser: (login: string) => void;
  clearUsers: () => void;
}

export const GithubContext = createContext<GithubContextType>({
  users: [],
  user: {} as User,
  loading: false,
  searchUsers: () => {},
  getUser: () => {},
  clearUsers: () => {},
});

interface Props {
  children: React.ReactNode;
}

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(githubReducer, {
    users: [],
    loading: false,
    user: {} as User,
  });

  const setLoading = () => {
    dispatch({
      type: GithubActionType.SET_LOADING,
    });
  };

  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(
      `${GITHUB_URL}/search/users?${params}`
      // ,{
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
      // }
    );
    const { items } = await response.json();

    dispatch({
      type: GithubActionType.GET_USERS,
      users: items,
    });
  };

  const getUser = async (login: string) => {
    setLoading();

    const response = await fetch(
      `${GITHUB_URL}/users/${login}`
      // ,{
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
      // }
    );

    if (response.status === 404) {
      const navigate = useNavigate();
      navigate('/notfound');
    } else {
      const data = await response.json();
      dispatch({
        type: GithubActionType.GET_USER,
        user: data,
      });
    }
  };

  const clearUsers = () => {
    dispatch({
      type: GithubActionType.CLEAR_USERS,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
