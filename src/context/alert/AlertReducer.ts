export enum AlertActionType {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
}

// interface AlertState {
//   msg: string;
// }

interface AlertAction {
  type: AlertActionType;
  payload?: string;
}

export const alertReducer = (state: string, action: AlertAction): string => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload ?? '';
    case 'REMOVE_ALERT':
      return '';
    default:
      return state;
  }
};
