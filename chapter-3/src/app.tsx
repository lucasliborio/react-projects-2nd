import React from 'react';
import { AppWrapper } from './app-style';
import './app-style.ts';
import { Header } from './components/header/header';
import { Backlog } from './pages/backlog';
import { Board } from './pages/board';
import { GlobalStyles } from './styles/global';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Header />
        <Board />
        <Backlog />
      </AppWrapper>
    </>
  );
};
