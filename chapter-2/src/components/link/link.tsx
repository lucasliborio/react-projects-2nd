import React from 'react';

import './link.css';
type PropsType = {
  url: string;
  title: string;
};
function Link({ url, title }: PropsType) {
  return (
    <a
      className="App-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
export default Link;
