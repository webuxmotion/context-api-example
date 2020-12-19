import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import ColleciontsContext from '../../context/collections/collections.context';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collections = useContext(ColleciontsContext);
  const collectionsForPreview = Object.keys(collections).map(key => collections[key]);

  return (
    <div className='collections-overview'>
      {collectionsForPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};

export default CollectionsOverview;
