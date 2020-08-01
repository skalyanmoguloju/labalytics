/**
 * @license
 * Copyright &copy 2020 Labalytics
 *
 * @author Sai Kalyan Moguloju
 */

import React from 'react';
import Spacer from 'terra-spacer';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

class Item extends React.Component {
  render() {
    return (
      <Spacer data-store-heading marginTop="large+2" marginBottom="large+2">
        <ReactPlaceholder type='media' ready={false} rows={4} showLoadingAnimation>
          <div/>
        </ReactPlaceholder>
      </Spacer>
    );
  }
}

export default Item;
