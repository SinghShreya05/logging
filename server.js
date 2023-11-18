
const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON

// Endpoint to ingest logs
app.post('/ingest', async (req, res) => {
    const logEntry = req.body;
    
    try {
        await client.index({
            index: 'logs', // Name of the index
            body: logEntry
        });
        res.status(200).send('Log ingested successfully');
    } catch (error) {
        console.error('Error saving to Elasticsearch:', error);
        res.status(500).send('Error ingesting log');
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Log ingestor running on port ${PORT}`);
});
