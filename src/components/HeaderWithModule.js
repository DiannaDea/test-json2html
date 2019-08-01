import React from 'react';
import * as jsonx from 'jsonx';
import * as Semantic from 'semantic-ui-react';
import headerTransformed from '../jsonStructure/header_transformed'

class MyButton extends React.Component {
  handleClick = () => {
    alert('Hello Diana')
  }
  componentDidMount() {
    console.log('====mounted')
  }
  render() {
    return <button {...this.props} onClick={this.handleClick}>{this.props.children}</button>
  }
}

const getReactElement = jsonx.getReactElement.bind({
  reactComponents: {
    MyButton
  },
  componentLibraries:{
    Semantic,
  }
});

class HeaderWithModule extends React.Component {
  render() {
    return (
        <React.Fragment>
        {getReactElement(headerTransformed)}
        </React.Fragment>
      );
    }
}

export default HeaderWithModule;