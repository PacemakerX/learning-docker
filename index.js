const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// example JSON endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express' });
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
    