import React from 'react';

const Header = (props) => (
  <div className="header"/*name is deprecated in react, so have to use className to make it a class as opposed to a prop*/>
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);
Header.defaultProps = {
  title: 'Indecision App'
}

export default Header;
