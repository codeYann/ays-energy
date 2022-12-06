import PropType from 'prop-types';
import React from 'react';
import './index.css';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function Container({ Children }) {
  const navigate = useNavigate();

  const redirectHomeHandler = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  const redirectLoginHandler = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div className="container-dashboard">
      <aside className="container-drawer">
        <ul>
          <li>
            <button type="button" onClick={redirectHomeHandler}>
              <HomeIcon className="container-drawer-icon" />
              Home
            </button>
          </li>
          <li>
            <button type="button" onClick={redirectLoginHandler}>
              <LogoutIcon className="container-drawer-icon" />
              Logout
            </button>
          </li>
        </ul>
      </aside>
      <main className="container-main">
        <Children />
      </main>
    </div>
  );
}

Container.propTypes = {
  Children: PropType.objectOf(React.Component),
};

export default Container;
