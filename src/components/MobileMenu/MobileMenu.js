/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label="Menu">
        <button onClick={onDismiss}>
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          <Icon id="close"/>
        </button>
        <nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: var(--color-gray-700-alpha);
`;

const Content = styled(DialogContent)`
  font-family: 'Raleway';
  height: 100%;
  width: 80%;
  margin-left: auto;
  background: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
  }

  nav, footer {
    display: flex;
    gap: 12px;
    flex-direction: column;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  nav {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-gray-900);
    text-transform: uppercase;
  }
  footer {
    color: var(--color-gray-700);
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: 32px;
  }
`

export default MobileMenu;
