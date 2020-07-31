import Axios from 'axios';
import React, {
  Fragment,
  useState,
  useEffect,
} from 'react'
import { Item } from './presenter';
import axios from 'axios';
import { GET_ITEMS } from '../../constants';

export const ItemContainer = () => {
  const [ itemData, setItemData ] = useState(null);
  useEffect(() => {
    axios.get(GET_ITEMS).then(response => setItemData(response.data));
  }, [])

  return (
    <Fragment>
      <h2>Available Items</h2>
      {itemData.map(item => <Item data={item} /> )}
    </Fragment>
  )
}
