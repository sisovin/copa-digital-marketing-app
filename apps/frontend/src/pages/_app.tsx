import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import '../styles/globals.css';
import { useEffect } from 'react';
import { apiService } from '../../libs/shared/data-access/api.service';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await apiService.get('/health');
        console.log('Health check response:', response);
      } catch (error) {
        console.error('Health check failed:', error);
      }
    };

    const setupMonitoring = () => {
      // Implement monitoring setup here
      console.log('Monitoring setup initialized');
    };

    checkHealth();
    setupMonitoring();
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
