import { createContext, useReducer } from 'react';
import { AlertActionType, alertReducer } from './AlertReducer';

interface AlertContextType {
  alert: string;
  setAlert: (msg: string) => void;
}

export const AlertContext = createContext<AlertContextType>({
  alert: '',
  setAlert: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AlterProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(alertReducer, '');

  const setAlert = (msg: string) => {
    dispatch({
      type: AlertActionType.SET_ALERT,
      payload: msg,
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
