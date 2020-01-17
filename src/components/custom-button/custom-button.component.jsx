import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, google, inverted, ...otherProps }) => (
  <button className={`${inverted ? 'inverted' : ''} ${google ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>
);

export default CustomButton;