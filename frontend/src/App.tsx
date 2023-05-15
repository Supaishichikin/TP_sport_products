import { useEffect } from 'react';
import './App.css';
import './main.css';
import Router from './routes';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import AuthService from './auth/AuthService';
import jwtDecode from 'jwt-decode';

function App() {

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    const accessToken = localStorage.getItem('accessToken');

    const refreshAccessToken = async () => {
      try {
        const { accessToken: newAccessToken } = await AuthService.refreshAccessToken(refreshToken??"");
        localStorage.setItem('accessToken', newAccessToken);
      } catch (error) {
        console.error(error);
      }
    };

    if (accessToken) {
      const decodedToken = jwtDecode<{ exp: number }>(accessToken);
      const tokenExpiration = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000); 
      if (tokenExpiration && currentTime >= tokenExpiration - 15*60) {
        refreshAccessToken();
      }
    }
  }, []);
  
  return <>
    <div style={{minHeight: "100svh", display: 'flex', flexDirection: 'column' }}>
      <HeaderNav/>
        <div style={{ flex: 1 }}>
          <Router/>
        </div>
      <Footer/>
    </div>
  </>;
}

export default App;
