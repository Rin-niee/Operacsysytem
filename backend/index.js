const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
const morgan = require('morgan');
const debug = require('debug')('app:server');
app.use(morgan('dev'));

// Настройки подключения к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database:  'postgres',
  password: '1548',
  port: 5432,
});
module.exports = pool;


// Маршрут для получения данных из базы данных
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM product');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    debug('\nError occurred:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Product not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    debug('\nError occurred:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
