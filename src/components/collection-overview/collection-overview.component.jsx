import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview, selectCollection } from './../../redux/shop/shop.selector'

import CollectionPreview from './../collection-preview/collection-preview.component'

const CollectionOverview = ({collections, collection}) => {
  console.log({collection});
  return(
    <div className='collection-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  collection: selectCollection
});

export default connect(mapStateToProps)(CollectionOverview);
