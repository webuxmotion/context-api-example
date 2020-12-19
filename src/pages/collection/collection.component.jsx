import React from 'react';

import ColleciontsContext from '../../context/collections/collections.context';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
  <ColleciontsContext.Consumer>
    {
      collections => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;

        return (
          <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
              {items.map(item => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        )
      }
    }
  </ColleciontsContext.Consumer>
);

export default CollectionPage;
