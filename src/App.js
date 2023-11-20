import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import useDocumentTitle from './utils/useDocumentTitle';
import ProtectedRoute from "./utils/ProtectedRoute"
import UseToken from "./utils/UseToken"
function Page(props) {
  useDocumentTitle(`${props.title}`)
  return <h2>{props.content}</h2>
}
function App() {
  const { getToken } = UseToken()
  return (
    <div className="App">
      <Routes>
        <Route path='/' title="Home" element={<Page title="Home" content={<HomePage />} />} />

        <Route path='/login' title="Sign In" element={
          <ProtectedRoute page="login" user={getToken}>
            <Page title="Login" content={<LoginPage />} />
          </ProtectedRoute>
        } />

        <Route path='/signup' title="Sign Up" element={
          <ProtectedRoute page="signUp" user={getToken}>
            <Page title="Sign Up" content={<SignUpPage />} />
          </ProtectedRoute>
        } />


      </Routes>

    </div>
  );
}

export default App;
