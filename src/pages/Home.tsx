import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCodeScanner from '../components/QRCodeScanner';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem('token') || sessionStorage.getItem('token'))) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <QRCodeScanner/>
    </div>
  );
}

export default Home;
