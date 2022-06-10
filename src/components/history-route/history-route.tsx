import {BrowserHistory} from 'history';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export interface HistoryRouterProps {
  history: BrowserHistory,
  basename?: string,
  children?: React.ReactNode,
}

function HistoryRouter({
  basename,
  children,
  history,
} : HistoryRouterProps) {
  const [historyState,setHistory] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setHistory),[history]);
  return (
    <Router
      basename={basename}
      location={historyState.location}
      navigationType={historyState.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
export default HistoryRouter;
