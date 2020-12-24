import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionPreview from '../../components/collection-preview/collection-preview'

import SHOP_DATA from './shop.data';

class Shop extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const {collections} = this.state;
    return(
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default withRouter(Shop);