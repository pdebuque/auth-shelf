import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddItemForm from '../AddItemForm/AddItemForm';
import ShelfItem from '../ShelfItem/ShelfItem'
import { Box } from '@mui/material'

function ShelfPage() {

  const dispatch = useDispatch();

  const getShelf = () => {
    dispatch({ type: 'GET_SHELF' })
  }

  useEffect(() => {
    getShelf()
  }, [])

  const shelf = useSelector(store => store.shelf);

  return (
    <div className="container">
      {JSON.stringify(shelf)}
      <h2>Shelf</h2>
      <AddItemForm />
      <p>All of the available items can be seen here.</p>
      <Box sx={{ display: 'flex' }}>
        {shelf.map(item => {
          return (
            <ShelfItem key={item.id} item={item} />
          )
        })
        }</Box>
    </div>
  );
}

export default ShelfPage;
