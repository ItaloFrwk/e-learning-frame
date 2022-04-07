import { AuthProvider } from './contexts/Authentication';
import PrivateRoute from './routes/PrivateRoute';
import './App.less';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <PrivateRoute />
    </AuthProvider>
  );
};

export default App;
