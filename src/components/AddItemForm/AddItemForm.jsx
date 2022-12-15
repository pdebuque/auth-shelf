import { useState } from 'react';
import {useDispatch} from 'react-redux';


export default function AddItemForm() {

  const [newItem, setNewItem] = useState({ description: '', image_url: '' })
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('in handleSubmit()')
    dispatch({type: 'ADD_NEW_ITEM', payload: newItem});
    setNewItem({description:'', image_url: ''})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input
        type="text"
        placeholder='name'
        value={newItem.description}
        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
      />
      <input
        type="text"
        placeholder='url'
        value={newItem.image_url}
        onChange={(e) => setNewItem({ ...newItem, image_url: e.target.value })}
      />
      <button type = 'submit'>submit</button>

    </form>
  )
}