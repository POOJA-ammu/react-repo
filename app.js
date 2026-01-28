const express = require('express');
const bodyParser = require('body-parser'); // to parse form data
const app = express();

// Middleware to parse form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a login form at the root URL
app.get('/', (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      <label>Username:</label>
      <input type="text" name="username" required /><br/><br/>
      <label>Password:</label>
      <input type="password" name="password" required /><br/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle login submissions
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // For demo purposes, check against hardcoded values
  if (username === 'admin' && password === 'secret') {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send('Invalid username or password. Try again.');
  }
});

app.listen(8080, () => console.log('App running on port 8080'));
