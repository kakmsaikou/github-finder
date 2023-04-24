import { createContext, useReducer } from 'react';
import { AlertActionType, AlertState, alertReducer } from './AlertReducer';

interface AlertContextType {
  alert: AlertState;
  setAlert: (msg: string, type: string) => void;
}

export const AlertContext = createContext<AlertContextType>({
  alert: null,
  setAlert: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AlterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: AlertActionType.SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({
        type: AlertActionType.REMOVE_ALERT,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
