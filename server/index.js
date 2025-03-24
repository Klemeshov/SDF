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

app.get('/users', async (req, res) => {
  const query = `select users.id,
                        users.email,
                        users.first_name,
                        users.second_name,
                        users.created_at,
                        photos.url as avatar_url
                 from users
                          left join photos on users.avatar = photos.id;`;

  const data = await db.any(query);

  res.json(data);
});

app.get('/posts', async (req, res) => {
  const query = `
      SELECT posts.id,
             posts.user_id,
             posts.text,
             posts.created_at,
             COALESCE(
                     json_agg(
                             json_build_object(
                                     'url', photos.url,
                                     'id', photos.id
                             )
                     ) FILTER(WHERE photos.id IS NOT NULL),
                     '[]'
             ) as photos
      FROM posts
               LEFT JOIN photos_posts ON photos_posts.post_id = posts.id
               LEFT JOIN photos ON photos.id = photos_posts.photo_id
      GROUP BY posts.id
      ORDER BY posts.created_at DESC
  `;

  const data = await db.any(query);

  return res.json(data);
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
