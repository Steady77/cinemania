import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import MaterialIcon from '@/components/ui/material-icon';

import { removeAuthData } from '@/store/auth/auth.slice';

const LogoutButton: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(removeAuthData());
  };

  return (
    <li>
      <a onClick={handleLogout}>
        <MaterialIcon name="MdLogout" />
        <span>Выйти</span>
      </a>
    </li>
  );
};
export default LogoutButton;
