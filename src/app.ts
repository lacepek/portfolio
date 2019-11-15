import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();
app.use(routes);

app.set('view engine', 'pug');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
