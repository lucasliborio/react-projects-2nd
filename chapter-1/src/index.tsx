import ReactDOM from 'react-dom/client';
import React from 'react'
import {List} from '@/components/list'
import './style.css'

function App() {
  return (
    <div className='container'>
      <h1>Rick and Morty</h1>
      <List />
    </div>
  )
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />);