import React, { useState } from 'react'
import styles from '@/styles/header.module.css';
import Image from 'next/image';
import logo from '../../public/img/logo.svg';
import menu from '../../public/img/menubar_icon.svg';
import close from '../../public/img/close_icon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.header_container}>
        <Image src={logo} alt='logo' className={styles.logo}/>
        <div>
          <ul className={styles.nav_links}>
            <li><a href="#features">Features</a></li>
            <li><a href='#service'>Service</a></li>
            <li><a href='#testimonial'>Testimonial</a></li>
          </ul>
        </div>
        <button className={styles.get_btn}><a href="#get-started">Get Started</a></button>
      </div>
      <div className={isMenuOpen ? styles.main_header_mobile : styles.main_header_close}>
      <div className={styles.header_mobile}>
        {!isMenuOpen ?
          <div className={styles.header_container_mobile}>
            <Image src={logo} alt='logo' className={styles.logo}/>
            <Image src={menu} alt='menu' onClick={() => setIsMenuOpen(true)}/>
          </div> :
          <div>
            <div className={styles.header_container_mobile_menu}>
              <div></div>
              <Image src={close} alt='menu' onClick={() => setIsMenuOpen(false)} className={styles.close_icon}/>
            </div>
            <div>
              <ul className={styles.nav_links_mobile}>
                <li onClick={() => setIsMenuOpen(false)}><a href="#features">Features</a></li>
                <li onClick={() => setIsMenuOpen(false)}><a href='#service'>Service</a></li>
                <li onClick={() => setIsMenuOpen(false)}><a href='#testimonial'>Testimonial</a></li>
              </ul>
              <button className={styles.get_btn_mobile} onClick={() => setIsMenuOpen(false)}><a href="#get-started">Get Started</a></button>
            </div>
          </div>
        }
      </div>
      </div>
    </>
  )
}

export default Header