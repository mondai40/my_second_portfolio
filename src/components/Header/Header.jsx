import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Hamburger from '../shared/Hamburger/Hamburger';
import SmartNavigation from '../Navigation/SmartNavigation';
import PCNavigation from '../Navigation/PCNavigation';

import './Header.scss';

const Header = () => {
  const [isShow, setShow] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= -100) return;
    if (currPos.y - prevPos.y < 0) {
      setHideHeader(true);
    } else if (currPos.y - prevPos.y > 0) {
      setHideHeader(false);
    }
  });

  const handleClick = () => {
    setShow(!isShow);
  };

  return (
    <header className={hideHeader ? 'header scrollHide' : 'header'} id="header">
      <div className="header__title">
        <a href="#hero">Shin Daimon</a>
      </div>
      <MediaQuery query="(max-width: 1023px)">
        <div className="header__hamburger" onClick={() => handleClick()}>
          <Hamburger isShow={isShow} />
        </div>
        <SmartNavigation modalShow={isShow} handleClick={() => handleClick()} />
      </MediaQuery>
      <MediaQuery query="(min-width: 1024px)">
        <PCNavigation />
      </MediaQuery>
    </header>
  );
};

export default Header;
