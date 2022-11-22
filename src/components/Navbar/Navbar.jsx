import React, { useState } from 'react';
import ButtonMain from '../Button/Button';
import './styles.css';
import logo_main from '../../assets/images/logoOld.png';
import burger from '../../assets/images/burger.png';
import { HamburgerSpin } from 'react-animated-burgers';

import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar  () {
  const [active, setActive] = useState(false);
  // const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <img src={logo_main} alt="logo" width="160px" 
      style={{marginBottom: '.62rem'}}
      />
      <HamburgerSpin
      isActive={active}
      toggleButton={toggle}
      barColor='white'
      buttonWidth={30}
      buttonStyle={{ padding: 0, position: 'relative', zIndex: '20000' }}
    />
      {/*
      <div className="menu-icon" onClick={handleClick}>
        <img src={burger} width='30px' height='30px' />
      </div>
      */}
      <ul className={active ? 'nav-menu active' : 'nav-menu'}>
        <Link
          // class="nav-linksa"
          // activeClass="active"
          to="about-info"
          spy
          smooth
          offset={50}
          duration={500}
        >
          Услуги
        </Link>
        <Link
          // class="nav-links"
          // activeClass="active"
          to="section2"
          spy
          smooth
          offset={50}
          duration={500}
        >
          Мастера
        </Link>
        <Link
          // class="nav-links"
          // activeClass="active"
          to="section3"
          spy
          smooth
          offset={50}
          duration={500}
        >
          Контакты
        </Link>
        <Link
          class="nav-links-i"
        >
          <ButtonMain />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
