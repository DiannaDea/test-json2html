import React from 'react';
import * as jsonx from 'jsonx';
import * as Semantic from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import headerTransformed from '../jsonStructure/header_transformed'

import './styles.css'

const HeaderMenuDropdown = ({children, text}) => (
  <Semantic.Dropdown text={text}>
    <Semantic.Dropdown.Menu>
      {children}
    </Semantic.Dropdown.Menu>
  </Semantic.Dropdown>
)

const getReactElement = jsonx.getReactElement.bind({
  reactComponents: {
    HeaderMenuDropdown,
    Link
  },
  componentLibraries:{
    Semantic,
  }
});

const HeaderWithModule = () => (
  <React.Fragment>
    {getReactElement(headerTransformed)}
  </React.Fragment>
)

export default HeaderWithModule;