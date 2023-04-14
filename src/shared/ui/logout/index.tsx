import React, { FC } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import Button from '@/shared/ui/button';

const Logout: FC = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('loginData');
    navigate('/login');
  };

  return (
    <Button variant="outlined" className="btn-icon" onClick={logoutHandler}>
      <BiLogOut />
    </Button>
  );
};

export default Logout;
