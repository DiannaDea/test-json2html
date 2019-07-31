import React from 'react';
import * as jsonx from 'jsonx';
import headerTransformed from '../jsonStructure/header_transformed'

class HeaderWithModule extends React.Component {
  render() {
    return (
        <React.Fragment>
        {jsonx.getReactElement(headerTransformed)}
        </React.Fragment>
      );
    }
}

export default HeaderWithModule;