import React, { useContext } from 'react';

import DirecotoryContext from '../../context/directory/directory.context';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const sections = useContext(DirecotoryContext);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
};

export default Directory;
