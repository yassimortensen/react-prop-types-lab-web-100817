import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Product from './components/Product';


ReactDOM.render(
  <Product
    name="Dunder Mifflin"
    producer="PaperCo"
    color="white"
    weight={210}
  />,
  document.getElementById('global')
);
