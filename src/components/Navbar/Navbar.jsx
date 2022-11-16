import ButtonMain from '../Button/Button';
import React, { useState } from "react";
import "./styles.css";
import logo_main from '../../assets/images/logoOld.png';
import burger from '../../assets/images/burger.png'

import { Link, animateScroll as scroll } from "react-scroll";
import ModalWindow from '../Modal/Modal';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <a>
        <img src={logo_main} alt='logo' width='160px' />
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <img src={burger} width='30px' height='30px' />
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>

        <Link
          class="nav-links"
          activeClass="active"
          to="about-info"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Услуги
        </Link>
        <Link
          class="nav-links"
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Мастера
        </Link>

        <Link
          class="nav-links"
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Контакты
        </Link>
        <Link
        class="nav-links"
        >
          <ButtonMain />
        </Link>
      </ul>

    </nav>
  );
};

export default Navbar;
