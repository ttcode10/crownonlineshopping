import React from 'react';

import Directory from '../../components/directory/directory.component'

const HomePage = (props) => (
  <div className='homepage'>
    {console.log(props)}
    <Directory className='directory-menu'/>
  </div>
);

export default HomePage;