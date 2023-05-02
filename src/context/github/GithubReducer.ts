export enum GithubActionType {
  GET_USERS = 'GET_USERS',
  GET_USER_AND_REPOS = 'GET_USER_AND_REPOS',
  SET_LOADING = 'SET_LOADING',
  CLEAR_USERS = 'CLEAR_USERS',
}

interface GithubState {
  users: User[];
  user: User;
  repos: Repo[];
  loading: boolean;
}

export interface UserAction {
  type: GithubActionType;
  users?: User[];
  user?: User;
  repos?: Repo[];
}

export const githubReducer = (
  state: GithubState,
  action: UserAction
): GithubState => {
  const { type, users, user, repos } = action;
  switch (type) {
    case GithubActionType.GET_USERS:
      return {
        ...state,
        users: users ?? [],
        loading: false,
      };
    case GithubActionType.GET_USER_AND_REPOS:
      return {
        ...state,
        user: user ?? ({} as User),
        repos: repos ?? [],
        loading: false,
      };
    case GithubActionType.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case GithubActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
