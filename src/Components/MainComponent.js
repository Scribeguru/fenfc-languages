import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Language from './LanguageComponent';
import Header from './HeaderComponent';
import { Route, Routes } from 'react-router-dom';

export default function Main() {

  smoothscroll.polyfill();

  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={<Language />} />
    </Routes>
    </>
  );
}