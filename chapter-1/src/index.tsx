import ReactDOM from 'react-dom/client';
import React from 'react'

function App() {
  return <h1>Rick and Morty</h1>
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />);