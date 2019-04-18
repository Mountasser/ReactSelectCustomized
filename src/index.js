import React from 'react';
import ReactDOM from 'react-dom';
import Custom from './toto/CustomeMountasser';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
 <Custom/>,
  document.getElementById('app')
);

module.hot.accept();