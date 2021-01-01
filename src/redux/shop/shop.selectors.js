import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])  //gets all the keys of the object and returns it to us as an array
)

export const selectCollection = memoize(collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections =>  collections[collectionUrlParam]
      )
  );