import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import useDocumentTitle from './utils/useDocumentTitle';

function Page(props) {
  useDocumentTitle(`${props.title}`)
  return <h2>{props.content}</h2>
}
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' title="Home" element={<Page title="Home" content={<HomePage />} />} />
        <Route path='/login' title="Sign In" element={<Page title="Login" content={<LoginPage />} />} />
        <Route path='/signup' title="Sign Up" element={<Page title="SignUp" content={<SignUpPage />} />} />
      </Routes>

    </div>
  );
}

export default App;
