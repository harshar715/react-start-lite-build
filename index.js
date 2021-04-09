const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public', { maxAge: 31557600 }));

const PORT = process.env.PORT || 3000;
const httpServer = app.listen(PORT, function () { console.log('listening to PORT'); });