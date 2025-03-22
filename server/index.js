import express from 'express';
import cors from 'cors';
import db from './configs/db.js';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: 'http://localhost:5173'
  })
);

app.get('/posts', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Yuriy Klemeshov',
      text: 'Я дотер',
      likesCounter: 5
    },
    {
      id: 2,
      name: 'Zxc Monstr',
      text: 'А я гей',
      likesCounter: 9999
    },
    {
      id: 3,
      name: 'Ivan Ivanov',
      text: 'Зачем я сюда зашел',
      likesCounter: -1
    }
  ]);
});

app.get('/users', async (req, res) => {
  const data = await db.any(`
      SELECT id, email, first_name, avatar_url
      FROM users
  `);

  res.json(data);
});

(async () => {
  try {
    await db.any(`select CURRENT_TIMESTAMP`);
    console.log('Database Connected');
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
