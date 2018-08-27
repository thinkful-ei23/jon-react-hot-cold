import React from 'react';
import Header from './header';
import Feedback from './feedback';
import Form from './form';
import Count from './count';
import GuessBox from './guessbox';

import './app.css';

export default function App() {
  return (
    <div>
      <Header />
      <section className="game">
        <Feedback />
        <Form />
        <Count />
        <GuessBox />
      </section>
    </div>
  );
}