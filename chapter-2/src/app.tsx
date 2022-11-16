import React from 'react';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './usnfwspatch.svg';
import Projects from './page/projects/projects';

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="lucasliborio" />} />
          <Route path="/projects" element={<Projects userName="octocat" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
