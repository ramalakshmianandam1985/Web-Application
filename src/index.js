const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');
 
const app = express();
const port = 3000;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', authRoutes);
 
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname + '/../' });
});
 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});