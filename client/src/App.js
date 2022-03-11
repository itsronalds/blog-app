import './App.css';
import Public from './auth/Public';
import Private from './auth/Private';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { isAuth } = useAuthContext();

  return isAuth ? <Private /> : <Public />;
}

export default App;
