const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM item
                  WHERE user_id = $1`
  pool.query(query, [req.user.id])
    .then(result=>res.send(result.rows))
    .catch(err=>console.log('could not get', err))
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  const query = `INSERT INTO item (description, image_url, user_id)
  VALUES ($1, $2, $3)`
  pool.query(query, [req.body.description, req.body.image_url, req.user.id])
    .then(()=>res.sendStatus(201))
    .catch(err=>console.log('could not add item', err))
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const query = `DELETE FROM item
                  WHERE id = $1`
  pool.query(query,[req.params.id])
    .then(()=>res.sendStatus(202))
    .catch(err=>console.log('could not delete', err))
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
