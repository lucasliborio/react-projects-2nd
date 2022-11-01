import ReactDOM from 'react-dom/client';
import React from 'react'
import {List} from '@/components/list'

function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <List />
    </div>
  )
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />);