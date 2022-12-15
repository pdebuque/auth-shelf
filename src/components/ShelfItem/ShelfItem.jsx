import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import {useDispatch} from 'react-redux'


export default function ShelfItem({ item }) {

const dispatch=useDispatch();

const handleDelete=()=>{
  dispatch({type: 'DELETE_ITEM', payload: item.id})
}

  return (
    <Card sx={{ maxWidth: 200, m: 2 }}>
      <CardMedia
        component='img'
        height='140'
        image={item.image_url}
        alt={`picture of ${item.description}`}
      />
      <CardContent>
        <Typography variant='h5'>
          {item.description}
        </Typography>
        <Button 
          variant='text' 
          onClick = {handleDelete}
          >delete</Button>
      </CardContent>
    </Card>
  )
}