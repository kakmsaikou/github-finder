import { createContext, useReducer } from 'react';
import { githubReducer, GithubActionType, UserAction } from './GithubReducer';
import { useNavigate } from 'react-router-dom';

interface GithubContextType {
  users: User[];
  user: User;
  repos: Repo[];
  loading: boolean;
  dispatch: React.Dispatch<UserAction>;
  searchUsers: (text: string) => void;
  getUser: (login: string) => void;
  getUserRepos: (login: string) => void;
  clearUsers: () => void;
}

export const GithubContext = createContext<GithubContextType>({
  users: [],
  user: {} as User,
  repos: [],
  loading: false,
  dispatch: () => {},
  searchUsers: () => {},
  getUser: () => {},
  getUserRepos: () => {},
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
    repos: [],
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

  const getUserRepos = async (login: string) => {
    setLoading();

    const params = new URLSearchParams({
      sort: 'created',
      per_page: '10',
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`
      // ,{
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
      // }
    );

    const data = await response.json();

    dispatch({
      type: GithubActionType.GET_REPOS,
      repos: data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: GithubActionType.CLEAR_USERS,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
