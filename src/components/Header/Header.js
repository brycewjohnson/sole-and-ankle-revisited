import React from 'react';
import styled from 'styled-components/macro';

import { MEDIA_QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <StyledSuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <NavIcons>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <button onClick={() => setShowMobileMenu(true)}><Icon id="menu" /></button>
        </NavIcons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const StyledSuperHeader = styled(SuperHeader)`
  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    display: none;
  }
`;

const NavIcons = styled.nav`
  display: none;

  button {
    border: none;
    background-color: transparent;
  }

  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    display: flex;
    gap: 32px;
  }

  @media (${MEDIA_QUERIES.phoneAndUnder}) {
    gap: 16px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    border-top: 4px solid var(--color-gray-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 6vw - 2.5rem, 3rem);
  margin: 0px 48px;

  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
