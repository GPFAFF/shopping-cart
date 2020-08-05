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
    async function fetchData() {
      const result = await axios.get(GET_ITEMS);
      setItemData(result.data)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <h2>Available Items</h2>
      {itemData.map(item => <Item item={item}/>)}
    </Fragment>
  )
}
