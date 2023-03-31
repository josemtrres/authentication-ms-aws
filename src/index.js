import app from './app.js';
import './db/mysql-connection.js';

app.listen(3000);

console.log(`Server is running on http://localhost:${3000}`);