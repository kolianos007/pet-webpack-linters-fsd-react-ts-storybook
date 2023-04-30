import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UnauthenticatedRoute = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const value = localStorage.getItem('loginData');
    return value ? JSON.parse(value) : null;
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'loginData') {
        setIsAuth(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default UnauthenticatedRoute;
