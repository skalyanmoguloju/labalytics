/**
 * @license
 * Copyright &copy 2020 Labalytics
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import ContentContainer from 'terra-content-container';
import Home from './Home';

const LabalyticsApplication = (props) => (
  <ContentContainer fill header={<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
  />}>
      <Home />
  </ContentContainer>
);


export default LabalyticsApplication;
