
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import AuthPage from './page/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './page/ProfilePage/ProfilePage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';


function App() {

const {authUser}= useAuthState(auth);
  return (
    <PageLayout>
    <Routes>
      <Route path='/' element={authUser ? <HomePage />: <Navigate to='/auth'/> }/>
      <Route path='/auth' element={ !authUser ? <AuthPage />: <Navigate to='/' />} />
      <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
