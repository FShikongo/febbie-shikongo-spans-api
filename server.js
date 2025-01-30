require('dotenv').config();  // Load environment variables

const express = require('express');
const cors = require('cors');  // Include CORS
const app = express();

const PORT = process.env.PORT || 5175;  // Use the PORT from .env or fallback to 5175

// Enable CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, Express with CORS!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//added commit 
