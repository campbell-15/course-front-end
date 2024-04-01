import {React} from 'react';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux'; 
import Store from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <AppRoutes/>
    </Provider>
  );
}

export default App;
