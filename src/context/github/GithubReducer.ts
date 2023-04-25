export enum GithubActionType {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
  SET_LOADING = 'SET_LOADING',
  CLEAR_USERS = 'CLEAR_USERS',
}

interface GithubState {
  users: User[];
  user: User;
  loading: boolean;
}

interface UserAction {
  type: GithubActionType;
  users?: User[];
  user?: User;
}

export const githubReducer = (
  state: GithubState,
  action: UserAction
): GithubState => {
  const { type, users, user } = action;
  switch (type) {
    case GithubActionType.GET_USERS:
      return {
        ...state,
        users: users ?? [],
        loading: false,
      };
    case GithubActionType.GET_USER:
      return {
        ...state,
        user: user ?? ({} as User),
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
