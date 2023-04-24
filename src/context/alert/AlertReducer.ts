export enum AlertActionType {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
}

export type AlertState = {
  msg: string;
  type: string;
} | null;

interface AlertAction {
  type: AlertActionType;
  payload?: AlertState;
}

export const alertReducer = (
  state: AlertState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload ?? null;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};
