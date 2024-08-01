import React, { Fragment } from 'react';

import logo from '@/assets/logo.svg';
// import { HeaderContainer } from '@/components/header/Header.styled';

import type { Component } from '@/types';

const Header: Component = () => (
  <Fragment>
    {/* <HeaderContainer> */}
    <div className="logo-block">
      <img src={logo.src} alt="logo" />
      <p>Seller Central Platform</p>
    </div>
    {/* </HeaderContainer> */}
    <div className="header-space" />
  </Fragment>
);

export default Header;
