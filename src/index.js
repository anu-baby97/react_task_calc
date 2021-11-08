//imported from node_modules--external modules
import React from 'react';
import ReactDOM from 'react-dom';
//in-built component is accessed only by importing it
import App from './App';

ReactDOM.render(
  // 
  <React.StrictMode>
    {/* inbuilt component is used as tag */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

